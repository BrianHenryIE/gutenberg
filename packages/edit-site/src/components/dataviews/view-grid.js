/**
 * WordPress dependencies
 */
import {
	__experimentalGrid as Grid,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	FlexBlock,
} from '@wordpress/components';
import { useAsyncList } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import ItemActions from './item-actions';

export function ViewGrid( { data, fields, view, actions, getItemId } ) {
	const mediaField = fields.find(
		( field ) => field.id === view.layout.mediaField
	);
	const primaryField = fields.find(
		( field ) => field.id === view.layout.primaryField
	);
	const visibleFields = fields.filter(
		( field ) =>
			! view.hiddenFields.includes( field.id ) &&
			! [ view.layout.mediaField, view.layout.primaryField ].includes(
				field.id
			)
	);
	const shownData = useAsyncList( data, { step: 3 } );
	return (
		<Grid
			gap={ 8 }
			columns={ 2 }
			alignment="top"
			className="dataviews-grid-view"
		>
			{ shownData.map( ( item, index ) => (
				<VStack key={ getItemId?.( item ) || index }>
					<div className="dataviews-view-grid__media">
						{ mediaField?.render( { item, view } ) }
					</div>
					<HStack justify="space-between">
						<FlexBlock>
							{ primaryField?.render( { item, view } ) }
						</FlexBlock>
						<FlexBlock>
							<ItemActions item={ item } actions={ actions } />
						</FlexBlock>
					</HStack>
					<VStack className="dataviews-view-grid__fields">
						{ visibleFields.map( ( field ) => (
							<HStack justify="space-between" key={ field.id }>
								<FlexBlock>
									<Text variant="muted">
										{ field.header }
									</Text>
								</FlexBlock>
								<FlexBlock>
									{ field.render( { item, view } ) }
								</FlexBlock>
							</HStack>
						) ) }
					</VStack>
				</VStack>
			) ) }
		</Grid>
	);
}
