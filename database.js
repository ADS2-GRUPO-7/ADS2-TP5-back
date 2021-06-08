const mongoose = require('mongoose');
const URI = 'mongodb://localhost/colegio-ipsel';
mongoose.connect(URI)
.then(db=>console.log('DadaBase is connected'))
.catch(err=>console.error(err))

module.exports = mongoose;