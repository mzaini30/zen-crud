zen_init = function(table, data){
	for (n in data){
		localStorage.setItem(table + '_' + data[n], '[]')
	}
	localStorage.setItem(table + '_id', '[]')
}

zen_create = function(table, data){
	// masih masalah jika table_id kosong
	ambil_id = JSON.parse(localStorage.getItem(table + '_id'))
	id_baru = Number(ambil_id[ambil_id.length - 1]) + 1
	ambil_id.push(id_baru)
	localStorage.setItem(table + '_id', JSON.stringify(ambil_id))

	field = []
	for (n in data){
		field[n] = JSON.parse(localStorage.getItem(table + '_' + n))
		field[n].push(data[n])
		localStorage.setItem(table + '_' + n, JSON.stringify(field[n]))
	}
}