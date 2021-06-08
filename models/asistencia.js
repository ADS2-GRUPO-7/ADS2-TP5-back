const mongoose = require('mongoose');
const {Schema} = mongoose;


const AsistenciaSchema = new Schema({
 fecha: {type: String, required: true},
 presencia:{type: String, required: true},
 justificacion: {type: String, required: true},
 idPersona: { type: Schema.ObjectId, ref: 'Persona' }
});
module.exports = mongoose.models.asistencia || mongoose.model('Asistencia', AsistenciaSchema);