import * as $ from 'jquery';

export class FilterTable {
    filterTable(value) {
        if (value != '') {
            $('p-table tbody tr').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        } else {
            $(this)
        }
    }
}