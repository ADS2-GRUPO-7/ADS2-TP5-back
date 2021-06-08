const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonaSchema = new Schema({
 nombre: {type: String, required: true},
 apellido: {type: String, required: true},
 dni: {type:String, required: true},
 genero: {type:String, required: true},
 fechaDeNacimiento: {type:String, required: true}
});
module.exports = mongoose.models.persona ||  mongoose.model('Persona', PersonaSchema);