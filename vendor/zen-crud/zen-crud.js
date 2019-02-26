zen_create = function(table, data){
	if (localStorage.getItem(table + '_id') == null){
		for (n in data){
			localStorage.setItem(table + '_' + n, '[]')
		}
		localStorage.setItem(table + '_id', '[]')
	}
	ambil_id = JSON.parse(localStorage.getItem(table + '_id'))
	if (ambil_id.length != 0){
		id_baru = Number(ambil_id[ambil_id.length - 1]) + 1
		ambil_id.push(id_baru)
		localStorage.setItem(table + '_id', JSON.stringify(ambil_id))	
	} else {
		localStorage.setItem(table + '_id', '[0]')
	}

	field = []
	for (n in data){
		field[n] = JSON.parse(localStorage.getItem(table + '_' + n))
		field[n].push(data[n])
		localStorage.setItem(table + '_' + n, JSON.stringify(field[n]))
	}
}

zen_read = function(table){
	data = JSON.parse(localStorage.getItem(table + '_id'))
	for (n in data){
		if (window[table + '_id'] == null){
			window[table + '_id'] = []
		}
	}
}