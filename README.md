# Zen CRUD JS

## Getting Started

## Cara Penggunaan

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