const db = require('../config/db');

exports.getAllBiodata = (req, res) => {
  db.query('SELECT * FROM biodata', (err, results) => {
    if (err) return res.status(500).json({ message: 'Gagal ambil data.' });
    res.json(results);
  });
};

exports.getBiodataById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM biodata WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Gagal ambil data.' });
    if (results.length === 0) return res.status(404).json({ message: 'Data tidak ditemukan.' });
    res.json(results[0]);
  });
};

exports.createBiodata = (req, res) => {
  const { nama, nim, kelas } = req.body;
  if (!nama || !nim || !kelas) return res.status(400).json({ message: 'Semua field wajib diisi.' });
  db.query('INSERT INTO biodata (nama, nim, kelas) VALUES (?, ?, ?)', [nama, nim, kelas], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal tambah data.' });
    res.status(201).json({ message: 'Data berhasil ditambahkan.', id: result.insertId });
  });
};

exports.updateBiodata = (req, res) => {
  const { id } = req.params;
  const { nama, nim, kelas } = req.body;
  db.query('UPDATE biodata SET nama = ?, nim = ?, kelas = ? WHERE id = ?', [nama, nim, kelas, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal update data.' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan.' });
    res.json({ message: 'Data berhasil diperbarui.' });
  });
};

exports.deleteBiodata = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM biodata WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal hapus data.' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan.' });
    res.json({ message: 'Data berhasil dihapus.' });
  });
};
