const Persona = require("../models/persona");

// CRUD PERSONAS

module.exports = {
    async listPersonas(req, res) {
        const personas = await Persona.findAll();
        res.json(personas); 
    },
    async createPersona(req, res) {
        const { nombres, apellidos, dni, nacimiento } = req.body;
        const persona_new = await Persona.create({ nombres, apellidos, dni, nacimiento });
        res.status(201).json(persona_new);
    },
    async updatePersona(req, res) {
        const { id } = req.params;
        const { nombres, apellidos, dni, nacimiento } = req.body;
        await Persona.update({ nombres, apellidos, dni, nacimiento }, { where: { id }});
        res.json({ mensaje: "Persona actualizada"});
    },
    async destroidPersona(req, res) {
        const { id } = req.params;
        await Persona.destroy({ where: { id }});
        res.json({ mensaje: "Persona eliminada"});
    },
};

