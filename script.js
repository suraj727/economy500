// Assuming you have a JSON data source with company information
const fortune500Data = [
    // ... Your company data here ...
];

// Function to create table rows
function createTableRow(company) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${company.rank}</td>
        <td>${company.name}</td>
        <td>${company.revenue}</td>
        <td>${company.profit}</td>
        <td><a href="${company.annualReportLink}">Annual Report</a></td>
        <td><a href="${company.investorPresentationLink}">Investor Presentation</a></td>
    `;
    return row;
}

// Function to sort the table by a specific column
function sortTable(column) {
    const table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("fortune500");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].cells[column].innerText;
            y = rows[i + 1].cells[column].innerText;
            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Populate the table with data
fortune500Data.forEach(company => {
    const row = createTableRow(company);
    document.getElementById('fortune500').appendChild(row);
});

// Add event listeners to table headers for sorting
const headers = document.querySelectorAll('#fortune500 th');
headers.forEach((header, index) => {
    header.addEventListener('click', () => {
        sortTable(index);
    });
});
