const { Libro } = require('../models');

const libroController = {
  getAllLibros: async (req, res) => {
    try {
      const libros = await Libro.findAll();
      res.json(libros);
    } catch (error) {
      console.error('Error al obtener todos los libros:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getLibroById: async (req, res) => {
    const { id } = req.params;
    try {
      const libro = await Libro.findByPk(id);
      res.json(libro || { error: 'Libro no encontrado' });
    } catch (error) {
      console.error('Error al obtener el libro por ID:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createLibro: async (req, res) => {
    const { titulo, autorId } = req.body;
    try {
      const nuevoLibro = await Libro.create({ titulo, autorId });
      res.status(201).json(nuevoLibro);
    } catch (error) {
      console.error('Error al crear un nuevo libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateLibro: async (req, res) => {
    const { id } = req.params;
    const { titulo, autorId } = req.body;
    try {
      const libro = await Libro.findByPk(id);
      if (libro) {
        await libro.update({ titulo, autorId });
        res.json(libro);
      } else {
        res.status(404).json({ error: 'Libro no encontrado' });
      }
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteLibro: async (req, res) => {
    const { id } = req.params;
    try {
      const libro = await Libro.findByPk(id);
      if (libro) {
        await libro.destroy();
        res.json({ message: 'Libro eliminado exitosamente' });
      } else {
        res.status(404).json({ error: 'Libro no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = libroController;