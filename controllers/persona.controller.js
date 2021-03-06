const Persona = require('../models/persona');
const personaCtrl = {}

personaCtrl.getAllPersona = async (req, res) => {
    var persona = await Persona.find();
    res.json(persona);
}

personaCtrl.getPorDni= async (req, res) => {
    var persona = await Persona.find(req.params);
    res.json(persona);
}

personaCtrl.createPersona = async (req, res) => {
    var persona = new Persona(req.body);
    /* console.log(persona) */
    try {
        await persona.save();
        res.json({
            'status': '1',
            'msg': 'persona guardado.'
        })
    } catch (error) {
        /* console.log(error) */
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

personaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
}

personaCtrl.editPersona = async (req, res) => {
    const vpersona = new Persona(req.body);
    try {
        await Persona.updateOne({_id: req.body._id}, vpersona);
        res.json({
            'status': '1',
            'msg': 'persona updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}
personaCtrl.deletePersona = async (req, res)=>{
 try {
    await Persona.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Persona removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}
module.exports = personaCtrl;