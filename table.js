
function createTable(csv){
    if (!csv || csv.length === 0) return '';
    const lines = csv.split('\\n');
    let table = '<table class="table table-bordered" style="margin:10px">';
    
    for (let i = 0; i < lines.length; i++) {
        const columns = lines[i].split(';');

        if (i === 0) { //Create Header
            table += '<thead><tr>';
            
            for (var j = 0; j < columns.length; j++) {
                table += '<th>' + columns[j] + '</th>';
            }

			table += '</tr></thead><tbody>';
        } else { //Create Body
            table += '<tr>';
            for (var j = 0; j < columns.length; j++) {
                table += '<td>' + columns[j] + '</td>';
            }
            table += '</tr>';
        }
    }

    table += '</tbody></table>';
    return table;
}