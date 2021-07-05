const mongoose = require('mongoose');
const {Schema} = mongoose;


const PagoSchema = new Schema({
 idAlumno: { type: Schema.ObjectId, ref: 'Alumno' },
 idUsuario: { type: Schema.ObjectId, ref: 'Usuario' },
 numeroDeCuota: {type: String, required: true},
 fecha: { type: String, required: true }
});
module.exports = mongoose.models.pago || mongoose.model('Pago', PagoSchema);