const Pago = require('../models/pago');
/* const Persona = require('../models/persona'); */
/* const Curso = require('../models/curso'); */

const pagoCtrl = {}

pagoCtrl.getAllPago = async (req, res) => {
    var Pago = await Pago.find().populate('idUsuario').populate('idAlumno').exec();
    /* console.log(Pago) */
    res.json(pago);
}

/* PagoCtrl.getPagoesCompleto = async (req, res) => {
    const Pago = await Pago.find().populate('idAlumno').exec();
    console.log(pasaje)
    res.json(Pago);
} */

pagoCtrl.createPago = async (req, res) => {
    var pago = new Pago(req.body);
    try {
        await pago.save();
        res.json({
            'status': '1',
            'msg': 'pago guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id);
    /* console.log(Pago)*/
    res.json(pago);
}


pagoCtrl.editPago = async (req, res) => {
    const vpago = new Pago(req.body);
    try {
        await Pago.updateOne({ _id: req.body._id }, vpago);
        res.json({
            'status': '1',
            'msg': 'pago updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
pagoCtrl.deletePago = async (req, res) => {
    try {
        await Pago.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'pago removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = pagoCtrl;