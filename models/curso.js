const mongoose = require('mongoose');
const {Schema} = mongoose;

const CursoSchema = new Schema({
 anio: {type: Number, required: true},
 division:{type: String, required: true}
});
module.exports = mongoose.models.curso || mongoose.model('Curso', CursoSchema);