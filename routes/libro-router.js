const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Obtener todos los libros
router.get('/', libroController.getAllLibros);

// Obtener un libro por ID
router.get('/:id', libroController.getLibroById);

// Crear un nuevo libro
router.post('/', libroController.createLibro);

// Actualizar un libro por ID
router.put('/:id', libroController.updateLibro);

// Eliminar un libro por ID
router.delete('/:id', libroController.deleteLibro);

module.exports = router;