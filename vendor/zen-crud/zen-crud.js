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
		// n = nama
		// data[n] = Zen

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
	data_sementara = []
	for (n in data){
		for (n2 in field_data){
			// window[table][n].field_data[n2] = data[n]
			// window[table][n][field_data[n2]] = data[n]
			// window[table][n] = 
			data_sementara[n].field_data[n2] = data[n]
		}
	}
	console.log(data_sementara)
}