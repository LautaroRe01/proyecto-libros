const express = require('express');
const router = express.Router();

// Importa tus controladores
const autorController = require('./controllers/autorController');
const libroController = require('./controllers/libroController');

// Definir rutas para la gestión de autores
router.get('/autores', autorController.getAllAutores);
router.get('/autores/:id', autorController.getAutorById);
router.post('/autores', autorController.createAutor);
router.put('/autores/:id', autorController.updateAutor);
router.delete('/autores/:id', autorController.deleteAutor);

// Definir rutas para la gestión de libros
router.get('/libros', libroController.getAllLibros);
router.get('/libros/:id', libroController.getLibroById);
router.post('/libros', libroController.createLibro);
router.put('/libros/:id', libroController.updateLibro);
router.delete('/libros/:id', libroController.deleteLibro);

module.exports = router;