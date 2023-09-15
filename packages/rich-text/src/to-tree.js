/**
 * Internal dependencies
 */

import { getActiveFormats } from './get-active-formats';
import { getFormatType } from './get-format-type';
import { OBJECT_REPLACEMENT_CHARACTER, ZWNBSP } from './special-characters';

function restoreOnAttributes( attributes, isEditableTree ) {
	if ( isEditableTree ) {
		return attributes;
	}

	const newAttributes = {};

	for ( const key in attributes ) {
		let newKey = key;
		if ( key.startsWith( 'data-disable-rich-text-' ) ) {
			newKey = key.slice( 'data-disable-rich-text-'.length );
		}

		newAttributes[ newKey ] = attributes[ key ];
	}

	return newAttributes;
}

/**
 * Converts a format object to information that can be used to create an element
 * from (type, attributes and object).
 *
 * @param {Object}  $1                        Named parameters.
 * @param {string}  $1.type                   The format type.
 * @param {string}  $1.tagName                The tag name.
 * @param {Object}  $1.attributes             The format attributes.
 * @param {Object}  $1.unregisteredAttributes The unregistered format
 *                                            attributes.
 * @param {boolean} $1.object                 Whether or not it is an object
 *                                            format.
 * @param {boolean} $1.boundaryClass          Whether or not to apply a boundary
 *                                            class.
 * @param {boolean} $1.isEditableTree
 *
 * @return {Object} Information to be used for element creation.
 */
function fromFormat( {
	type,
	tagName,
	attributes,
	unregisteredAttributes,
	object,
	boundaryClass,
	isEditableTree,
} ) {
	const formatType = getFormatType( type );

	let elementAttributes = {};

	if ( boundaryClass && isEditableTree ) {
		elementAttributes[ 'data-rich-text-format-boundary' ] = 'true';
	}

	if ( ! formatType ) {
		if ( attributes ) {
			elementAttributes = { ...attributes, ...elementAttributes };
		}

		return {
			type,
			attributes: restoreOnAttributes(
				elementAttributes,
				isEditableTree
			),
			object,
		};
	}

	elementAttributes = { ...unregisteredAttributes, ...elementAttributes };

	for ( const name in attributes ) {
		const key = formatType.attributes
			? formatType.attributes[ name ]
			: false;

		if ( key ) {
			elementAttributes[ key ] = attributes[ name ];
		} else {
			elementAttributes[ name ] = attributes[ name ];
		}
	}

	if ( formatType.className ) {
		if ( elementAttributes.class ) {
			elementAttributes.class = `${ formatType.className } ${ elementAttributes.class }`;
		} else {
			elementAttributes.class = formatType.className;
		}
	}

	// When a format is declared as non editable, make it non editable in the
	// editor.
	if ( isEditableTree && formatType.contentEditable === false ) {
		elementAttributes.contenteditable = 'false';
	}

	return {
		type: tagName || formatType.tagName,
		object: formatType.object,
		attributes: restoreOnAttributes( elementAttributes, isEditableTree ),
	};
}

/**
 * Checks if both arrays of formats up until a certain index are equal.
 *
 * @param {Array}  a     Array of formats to compare.
 * @param {Array}  b     Array of formats to compare.
 * @param {number} index Index to check until.
 */
function isEqualUntil( a, b, index ) {
	do {
		if ( a[ index ] !== b[ index ] ) {
			return false;
		}
	} while ( index-- );

	return true;
}

export function toTree( {
	value,
	createEmpty,
	append,
	getLastChild,
	getParent,
	isText,
	getText,
	remove,
	appendText,
	onStartIndex,
	onEndIndex,
	isEditableTree,
	placeholder,
} ) {
	const { formats, _formats, replacements, text, start, end } = value;

	const tags = [];

	_formats.forEach( ( range, format ) => {
		tags.push( { type: 'open', format, pos: range[ 0 ] } );
		tags.push( { type: 'close', format, pos: range[ 1 ] } );
	} );

	replacements.forEach( ( format, index ) => {
		tags.push( { type: 'replacement', format, pos: index } );
	} );

	let index = -1;

	do {
		index = text.indexOf( '\n', index + 1 );
		if ( index !== -1 ) {
			tags.push( {
				type: 'replacement',
				format: {
					type: 'br',
					attributes: isEditableTree
						? {
								'data-rich-text-line-break': 'true',
						  }
						: undefined,
					object: true,
				},
				pos: index,
			} );
		}
	} while ( index !== -1 );

	tags.sort( ( a, b ) => {
		if ( a.pos === b.pos ) {
			return a.type === 'close' ? -1 : 1;
		}
		return a.pos - b.pos;
	} );

	const tree = createEmpty();
	const activeFormats = getActiveFormats( value );
	const deepestActiveFormat = activeFormats[ activeFormats.length - 1 ];

	let currentNode = tree;
	let lastPos = 0;

	for ( const tag of tags ) {
		if ( lastPos !== tag.pos ) {
			const _text = append(
				currentNode,
				text.substring( lastPos, tag.pos )
			);
			// check if text contains selection start or end
			if ( lastPos < start && tag.pos > start ) {
				onStartIndex( tree, _text, start - lastPos );
			}
			if ( lastPos < end && tag.pos > end ) {
				onEndIndex( tree, _text, end - lastPos );
			}
		}

		if ( tag.type === 'open' ) {
			const { type, tagName, attributes, unregisteredAttributes } =
				tag.format;
			const boundaryClass =
				-isEditableTree && tag.format === deepestActiveFormat;
			currentNode = append(
				currentNode,
				fromFormat( {
					type,
					tagName,
					attributes,
					unregisteredAttributes,
					boundaryClass,
					isEditableTree,
				} )
			);

			lastPos = tag.pos;
		} else if ( tag.type === 'close' ) {
			currentNode = getParent( currentNode );
			lastPos = tag.pos;
		} else if ( tag.type === 'replacement' ) {
			append(
				currentNode,
				fromFormat( {
					...tag.format,
					isEditableTree,
				} )
			);

			lastPos = tag.pos + 1;
		}
	}

	if ( lastPos !== text.length ) {
		const _text = append( currentNode, text.substring( lastPos ) );
		// check if text contains selection start or end
		if ( lastPos < start ) {
			onStartIndex( tree, _text, start - lastPos );
		}
		if ( lastPos < end ) {
			onEndIndex( tree, _text, end - lastPos );
		}
	}

	return tree;
}
