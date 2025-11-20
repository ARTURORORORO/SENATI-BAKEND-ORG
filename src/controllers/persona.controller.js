const Persona = require("../models/persona");

// CRUD PERSONAS

module.exports = {
    async listPersonas(req, res) {
        const personas = await Persona.findAll();
        res.json(personas); 
    },
    async createPersona(req, res) {
        try {
            const { nombres, apellidos, dni, nacimiento } = req.body || {};
            
            if (!req.body) {
                return res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
            }
            
            const persona_new = await Persona.create({ nombres, apellidos, dni, nacimiento });
            res.status(201).json(persona_new);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updatePersona(req, res) {
        try {
            const { id } = req.params;
            
            // Verificar si req.body existe y tiene contenido
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({ 
                    error: "El cuerpo de la solicitud está vacío",
                    hint: "Asegúrate de enviar Content-Type: application/json y un body JSON válido"
                });
            }
            
            const { nombres, apellidos, dni, nacimiento } = req.body;
            
            await Persona.update({ nombres, apellidos, dni, nacimiento }, { where: { id }});
            res.json({ mensaje: "Persona actualizada"});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async destroidPersona(req, res) {
        const { id } = req.params;
        await Persona.destroy({ where: { id }});
        res.json({ mensaje: "Persona eliminada"});
    },
};

