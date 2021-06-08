const mongoose = require('mongoose');
const usuarioModel = require('./usuario');
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
 dni: {type: String, required: true},
 nombre:{type: String, required: true},
 apellido: {type: String, required: true},
 tipoDeCuenta: {type: String, required: true}
});
module.exports = mongoose.models.usuario || mongoose.model('Usuario', UsuarioSchema);