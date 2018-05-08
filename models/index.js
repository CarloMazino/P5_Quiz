const path = require('path');

//Cargar ORM
const Sequelize = require('sequelize');

// Para utilizar BBDD SQLite:
const sequelize = new Sequelize("sqlite:quiz.sqlite");

// Importar BBDD
var quiz= sequelize.import(path.join(__dirname, 'quiz'));



/*
// Importar la definición de la Quiz Table desde quiz.js
const quizzes = sequelize.define(
    'quiz',
    {
        question:{
            type: Sequelize.STRING,
            unique: {msg: "Ya existe esta pregunta"},
            validate: {notEmpty: {msg: "La respuesta no puede estar vacía"}}
        },
        answer: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "La respuesta no puede estar vacía"}}
        }
    }
);
*/


// Create tables
sequelize.sync()
.then(() => console.log('Data Bases created successfully'))
.catch(error => {
    console.log("Error creating the data base tables:", error);
    process.exit(1);
}
);

exports.quiz=quiz;
