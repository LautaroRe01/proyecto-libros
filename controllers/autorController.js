const { Autor } = require('../models');

const autorController = {
  getAllAutores: async (req, res) => {
    try {
      const autores = await Autor.findAll();
      res.json(autores);
    } catch (error) {
      console.error('Error al obtener todos los autores:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getAutorById: async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autor.findByPk(id);
      res.json(autor || { error: 'Autor no encontrado' });
    } catch (error) {
      console.error('Error al obtener el autor por ID:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  createAutor: async (req, res) => {
    const { nombre, nacionalidad } = req.body;
    try {
      const nuevoAutor = await Autor.create({ nombre, nacionalidad });
      res.status(201).json(nuevoAutor);
    } catch (error) {
      console.error('Error al crear un nuevo autor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateAutor: async (req, res) => {
    const { id } = req.params;
    const { nombre, nacionalidad } = req.body;
    try {
      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor no encontrado' });
      }

      await autor.update({ nombre, nacionalidad });
      res.json(autor);
    } catch (error) {
      console.error('Error al actualizar el autor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteAutor: async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor no encontrado' });
      }

      await autor.destroy();
      res.json({ message: 'Autor eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el autor:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = autorController;