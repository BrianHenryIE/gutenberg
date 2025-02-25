/**
 * WordPress dependencies
 */
import { pasteHandler } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import { init as initAndRegisterTableBlock } from '../../../../../block-library/src/table';

const tableWithHeaderFooterAndBodyUsingColspan = `
<table>
	<thead>
		<tr>
			<th colspan="2">Colspan 2</th>
			<th>Header Cell</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2">Colspan 2</td>
			<td>Cell Data</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th colspan="2">Colspan 2</th>
			<th>Footer Cell</th>
		</tr>
	</tfoot>
</table>`;

const tableWithHeaderFooterAndBodyUsingRowspan = `
<table>
	<thead>
		<tr>
			<th rowspan="2">Rowspan 2</th>
			<th>Header Cell</th>
		</tr>
		<tr>
			<th>Header Cell</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="2">Rowspan 2</td>
			<td>Cell Data</td>
		</tr>
		<tr>
			<td>Cell Data</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td rowspan="2">Rowspan 2</td>
			<td>Footer Cell</td>
		</tr>
		<tr>
			<td>Footer Cell</td>
		</tr>
	</tfoot>
</table>`;

describe( 'pasteHandler', () => {
	beforeAll( () => {
		initAndRegisterTableBlock();
	} );

	it( 'can handle a table with thead, tbody and tfoot using colspan', () => {
		const [ result ] = pasteHandler( {
			HTML: tableWithHeaderFooterAndBodyUsingColspan,
			tagName: 'p',
		} );

		expect( console ).toHaveLogged();

		expect( result.attributes ).toEqual( {
			hasFixedLayout: false,
			caption: '',
			head: [
				{
					cells: [
						{ content: 'Colspan 2', tag: 'th', colspan: '2' },
						{ content: 'Header Cell', tag: 'th' },
					],
				},
			],
			body: [
				{
					cells: [
						{ content: 'Colspan 2', tag: 'td', colspan: '2' },
						{ content: 'Cell Data', tag: 'td' },
					],
				},
			],
			foot: [
				{
					cells: [
						{ content: 'Colspan 2', tag: 'th', colspan: '2' },
						{ content: 'Footer Cell', tag: 'th' },
					],
				},
			],
		} );
		expect( result.name ).toEqual( 'core/table' );
		expect( result.isValid ).toBeTruthy();
	} );

	it( 'can handle a table with thead, tbody and tfoot using rowspan', () => {
		const [ result ] = pasteHandler( {
			HTML: tableWithHeaderFooterAndBodyUsingRowspan,
			tagName: 'p',
		} );

		expect( console ).toHaveLogged();

		expect( result.attributes ).toEqual( {
			hasFixedLayout: false,
			caption: '',
			head: [
				{
					cells: [
						{ content: 'Rowspan 2', tag: 'th', rowspan: '2' },
						{ content: 'Header Cell', tag: 'th' },
					],
				},
				{
					cells: [ { content: 'Header Cell', tag: 'th' } ],
				},
			],
			body: [
				{
					cells: [
						{ content: 'Rowspan 2', tag: 'td', rowspan: '2' },
						{ content: 'Cell Data', tag: 'td' },
					],
				},
				{
					cells: [ { content: 'Cell Data', tag: 'td' } ],
				},
			],
			foot: [
				{
					cells: [
						{ content: 'Rowspan 2', tag: 'td', rowspan: '2' },
						{ content: 'Footer Cell', tag: 'td' },
					],
				},
				{
					cells: [ { content: 'Footer Cell', tag: 'td' } ],
				},
			],
		} );
		expect( result.name ).toEqual( 'core/table' );
		expect( result.isValid ).toBeTruthy();
	} );
} );
