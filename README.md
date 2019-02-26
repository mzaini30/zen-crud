# Zen CRUD JS

Jadi lok, tujuan library ini untuk memudahkan dalam pengelolaan database APK webview yang biasa kubuat. Semoga bisa lah nanti pas tak jadikan APK. Kalau untuk browser sih oke aja.

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

`mahasiswa` itu nama table-nya.

Kemudian `nama`, `angkatan`, dan `program_studi` adalah field-field yang kita isikan ke dalam table `mahasiswa`.

Maka, maksud dari sintaks di atas adalah memasukkan data ke table `mahasiswa` yang berisi data-data dari `nama`, `angkatan`, dan `program_studi` yang telah dideklarasikan.

### Read

```javascript
zen_read('mahasiswa')
```

Sintaks di atas akan menghasilkan:

```
mahasiswa[0].nama = 'Zen'
mahasiswa[0].angkatan = '2015'
mahasiswa[0].program_studi = 'psikologi'
```

yang bisa dipanggil secara langsung karena mereka adalah variable global.

### Update

```javascript
zen_update('mahasiswa', 0, {
	'program_studi': 'ilmu nuklir'
})
```

Maksud dari sintaks di atas adalah update dari table `mahasiswa` yang memiliki `id` 0, diubah bagian `program_studi`-nya menjadi `ilmu nuklir`.

### Delete

```javascript
zen_delete('mahasiswa', 0)
```

Sintaks di atas berarti hapus dari table `mahasiswa` dengan id 0.

## Pull Request?

Untuk `pull request` jangan dulu ya. Aku bingung kalau baca skrip lainnya. Hehehehe.

Add issue aja ya.