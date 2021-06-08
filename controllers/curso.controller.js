const Curso = require('../models/curso');

const cursoCtrl = {}

cursoCtrl.getAllCurso = async (req, res) => {
    var curso = await Curso.find();
    res.json(curso);
}

cursoCtrl.createCurso = async (req, res) => {
    var curso = new Curso(req.body);
    console.log(curso)
    try {
        await curso.save();
        res.json({
            'status': '1',
            'msg': 'curso guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

cursoCtrl.getCurso = async (req, res) => {
    const curso = await Curso.findById(req.params.id);
    /* console.log(curso)*/
    res.json(curso);
}


cursoCtrl.editCurso = async (req, res) => {
    const vcurso = new Curso(req.body);
    try {
        await Curso.updateOne({ _id: req.body._id }, vcurso);
        res.json({
            'status': '1',
            'msg': 'curso updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
cursoCtrl.deleteCurso = async (req, res) => {
    try {
        await Curso.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Curso removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = cursoCtrl;