export const Table = (title: string, headerRow: string[], dataRows: string[][]): string => {
	const headerCells = headerRow.map(header => `<th>${header}</th>`).join('');
	const bodyRows = dataRows.map(row => 
		`<tr class="themed-table-row">${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
	).join('');

	return `<div class="themed-table-container" style="max-width: 100%; max-height: 380px; overflow-y: auto;">` +
		`<h3 class="themed-table-title">${title}</h3>` +
		`<table class="themed-table" style="width: 100%; border-collapse: collapse;">` +
			`<tr class="themed-table-header">${headerCells}</tr>` +
			`${bodyRows}` +
		`</table>` +
	`</div>`;
};
