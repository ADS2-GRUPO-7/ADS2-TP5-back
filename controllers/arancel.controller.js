const Arancel = require('../models/arancel');
/* const Persona = require('../models/persona'); */
/* const Curso = require('../models/curso'); */

const arancelCtrl = {}

arancelCtrl.getAllArancel = async (req, res) => {
    var arancel = await Arancel.find().populate('idUsuario').populate('idAlumno').exec();
    console.log(arancel)
    res.json(arancel);
}

/* arancelCtrl.getArancelesCompleto = async (req, res) => {
    const arancel = await Arancel.find().populate('idAlumno').exec();
    console.log(pasaje)
    res.json(arancel);
} */

arancelCtrl.createArancel = async (req, res) => {
    var arancel = new Arancel(req.body);
    try {
        await arancel.save();
        res.json({
            'status': '1',
            'msg': 'arancel guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

arancelCtrl.getArancel = async (req, res) => {
    const arancel = await Arancel.findById(req.params.id);
    /* console.log(arancel)*/
    res.json(arancel);
}


arancelCtrl.editArancel = async (req, res) => {
    const varancel = new Arancel(req.body);
    try {
        await Arancel.updateOne({ _id: req.body._id }, varancel);
        res.json({
            'status': '1',
            'msg': 'arancel updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
arancelCtrl.deleteArancel = async (req, res) => {
    try {
        await Arancel.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Arancel removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = arancelCtrl;