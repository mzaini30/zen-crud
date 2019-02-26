# Zen CRUD JS

## Getting Started

Download di: <https://raw.githubusercontent.com/mzaini30/zen-crud/master/vendor/zen-crud/zen-crud.js>

Untuk menggunakannya, cukup gunakan cara seperti biasanya:

```html
<script type="text/javascript" src="zen-crud.js"></script>
```

## Sintaks

### Create

```javascript
zen_create('mahasiswa', {
	'nama': 'Zen',
	'angkatan': '2015'
	'program_studi': 'psikologi'
})
```

### Read

```javascript
zen_read('mahasiswa')
```

### Update

```javascript
zen_update('mahasiswa', 0, {
	'program_studi': 'ilmu nuklir'
})
```

### Delete

```javascript
zen_delete('mahasiswa', 0)
```