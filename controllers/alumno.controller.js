const Alumno = require('../models/alumno');
const Persona = require('../models/persona');

const alumnoCtrl = {}

alumnoCtrl.getAllAlumno = async (req, res) => {
    var alumno = await Alumno.find().populate('idPersona').populate('idCurso').populate('idPersonaTutor').exec();
    res.json(alumno);
}

alumnoCtrl.getPorIdPersona= async (req, res) => {
    var alumno = await Alumno.find(req.params).populate('idPersona').populate('idCurso').populate('idPersonaTutor').exec();
    res.json(alumno);
}

alumnoCtrl.createAlumno = async (req, res) => {
    var alumno = new Alumno(req.body);
    try {
        await alumno.save();
        res.json({
            'status': '1',
            'msg': 'alumno guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

alumnoCtrl.getAlumno = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id).populate('idPersona').populate('idCurso').populate('idPersonaTutor').exec();
    /* console.log(alumno)*/
    res.json(alumno);
}


alumnoCtrl.editAlumno = async (req, res) => {
    const valumno = new Alumno(req.body);
    try {
        await Alumno.updateOne({ _id: req.body._id }, valumno);
        res.json({
            'status': '1',
            'msg': 'alumno updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
alumnoCtrl.deleteAlumno = async (req, res) => {
    try {
        await Alumno.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'alumno removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = alumnoCtrl;