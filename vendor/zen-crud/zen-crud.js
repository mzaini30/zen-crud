zen_init = function(table, data){
	for (n in data){
		localStorage.setItem(table + '_' + data[n], '[]')
	}
	localStorage.setItem(table + '_' + 'id', '[]')
}