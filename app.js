const express = require('express');
const path = require('path');
const app = express();

// Configuración y carga de variables de entorno
require('dotenv').config();

// Conexión a la base de datos
const db = require('./db');

// Ejemplo de uso de los modelos
async function ejemplo() {
  let transaction;
  try {
    // Inicia una transacción
    transaction = await db.sequelize.transaction();

    // Crear un autor
    const nuevoAutor = await db.Autor.create(
      { nombre: 'Nuevo Autor', nacionalidad: 'Desconocida' },
      { transaction }
    );

    // Crear un libro asociado al autor
    const nuevoLibro = await db.Libro.create(
      { titulo: 'Nuevo Libro', autorId: nuevoAutor.id },
      { transaction }
    );

    // Confirmar la transacción
    await transaction.commit();

    // Obtener todos los autores y libros
    const autores = await db.Autor.findAll();
    const libros = await db.Libro.findAll();

    console.log('Autores:', autores);
    console.log('Libros:', libros);
  } catch (error) {
    // Si hay un error, deshacer la transacción
    if (transaction) await transaction.rollback();
    console.error('Error en el ejemplo:', error);
  }
}

// Sincronización de la base de datos
db.sequelize.sync()
  .then(() => {
    // Ejemplo de uso de modelos
    ejemplo();

    // Configuración de archivos estáticos
    app.use(express.static(path.join(__dirname, '../public')));

    // Escucha en el puerto
    const port = process.env.PORT || 3306;
    app.listen(port, () => {
      console.log(`Servidor Express escuchando en http://localhost:${port}`);
    });

    // Ruta principal
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "views/home.html"));
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });