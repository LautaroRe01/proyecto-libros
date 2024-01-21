const express = require('express');
const router = express.Router();

// Importa los controladores relacionados con libros
const libroController = require('../controllers/libroController');

router.get('/', libroController.getAllLibros);
router.get('/:id', libroController.getLibroById);
router.post('/', libroController.createLibro);
router.put('/:id', libroController.updateLibro);
router.delete('/:id', libroController.deleteLibro);

module.exports = router;

const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Obtener todos los libros
router.get('/libros', libroController.getAllLibros);

// Obtener un libro por ID
router.get('/libros/:id', libroController.getLibroById);

// Crear un nuevo libro
router.post('/libros', libroController.createLibro);

// Actualizar un libro por ID
router.put('/libros/:id', libroController.updateLibro);

// Eliminar un libro por ID
router.delete('/libros/:id', libroController.deleteLibro);

module.exports = router;