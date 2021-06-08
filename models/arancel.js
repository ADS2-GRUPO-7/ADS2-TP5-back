const mongoose = require('mongoose');
const {Schema} = mongoose;


const ArancelSchema = new Schema({
 idAlumno: { type: Schema.ObjectId, ref: 'Persona' },
 idUsuario: { type: Schema.ObjectId, ref: 'Usuario' },
 numeroDeCuota: {type: Number, required: true}
});
module.exports = mongoose.models.arancel || mongoose.model('Arancel', ArancelSchema);