const express = require('express');
const path = require('path');
const app = express();

// Configuración y carga de variables de entorno
require('dotenv').config();

// Conexión a la base de datos
const db = require('./db');

// Ejemplo de uso de los modelos
async function ejemplo() {
  try {
    // Crear un autor
    const nuevoAutor = await db.Autor.create({ nombre: 'Nuevo Autor', nacionalidad: 'Desconocida' });

    // Crear un libro asociado al autor
    const nuevoLibro = await db.Libro.create({ titulo: 'Nuevo Libro', autorId: nuevoAutor.id });

    // Obtener todos los autores y libros
    const autores = await db.Autor.findAll();
    const libros = await db.Libro.findAll();

    console.log('Autores:', autores);
    console.log('Libros:', libros);
  } catch (error) {
    console.error('Error en el ejemplo:', error);
  }
}

// Llama al ejemplo después de la sincronización de la base de datos
db.sequelize.sync()
  .then(() => {
    ejemplo();
    // Configuración de archivos estáticos y escucha en el puerto
    app.use(express.static(path.join(__dirname, '../public')));

    const port = process.env.PORT || 3306;

    app.listen(port, () => {
      console.log(`Servidor Express escuchando en http://localhost:${port}`);
    });

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "views/home.html"));
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });