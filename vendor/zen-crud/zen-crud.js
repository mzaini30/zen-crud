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
	isi_isian = []

	for (n in data){
		field[n] = JSON.parse(localStorage.getItem(table + '_' + n))
		field[n].push(data[n])
		localStorage.setItem(table + '_' + n, JSON.stringify(field[n]))

		isi_isian.push(n)
	}
	localStorage.setItem('field_' + table, JSON.stringify(isi_isian))
}

zen_read = function(table){
	data = JSON.parse(localStorage.getItem(table + '_id'))
	field_data = JSON.parse(localStorage.getItem('field_' + table))
	field_data.push('id')
	window[table] = []
	for (n in data){
		window[table][n] = {}
		for (n2 in field_data){
			isi_data = JSON.parse(localStorage.getItem(table + '_' + field_data[n2]))
			string = table + '[' + n + '].' + field_data[n2] + ' = "' + isi_data[n] + '"'
			eval(string)
		}
	}
}

zen_update = function(table, where, data){
	
}

zen_delete = function(table, where){
	ambil_id = JSON.parse(localStorage.getItem(table + '_id'))
	field_data = JSON.parse(localStorage.getItem('field_' + table))
	field_data.push('id')
	key_yang_dihapus = 0
	for (n in ambil_id){
		if (ambil_id[n] == where){
			key_yang_dihapus = n
		}
	}
	for (n in field_data){
		simpan_data = []
		ambil_data = JSON.parse(localStorage.getItem(table + '_' + field_data[n]))
		string = 'delete ambil_data' + '[' + key_yang_dihapus + ']'
		eval(string)
		for (n2 in ambil_data){
			simpan_data.push(ambil_data[n2])
		}
		localStorage.setItem(table + '_' + field_data[n], JSON.stringify(simpan_data))
	}
}