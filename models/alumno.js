const mongoose = require('mongoose');
const alumnoModel = require('./alumno');
const {Schema} = mongoose;


const AlumnoSchema = new Schema({
 condicionRegular: {type: Boolean, required: true},
 idPersona: { type: Schema.ObjectId, ref: 'Persona' },
 idCurso: { type: Schema.ObjectId, ref: 'Curso' },
 idPersonaTutor: { type: Schema.ObjectId, ref: 'Persona' }
});
module.exports = mongoose.models.alumno || mongoose.model('Alumno', AlumnoSchema);