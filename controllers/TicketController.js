const Ticket = require("../models/Ticket");

// Crear un ticket
const crearTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el ticket",
            error: error.message,
        });
    }
};

// Obtener todos los tickets
const obtenerTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los tickets",
            error: error.message,
        });
    }
};

// Obtener un ticket por ID
const obtenerTicketPorId = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                mensaje: "Ticket no encontrado",
            });
        }

        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al buscar el ticket",
            error: error.message,
        });
    }
};

// Actualizar un ticket
const actualizarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({
                mensaje: "Ticket no encontrado",
            });
        }

        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el ticket",
            error: error.message,
        });
    }
};

// Eliminar un ticket
const eliminarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                mensaje: "Ticket no encontrado",
            });
        }

        res.status(200).json({
            mensaje: "Ticket eliminado correctamente",
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el ticket",
            error: error.message,
        });
    }
};

module.exports = {
    crearTicket,
    obtenerTickets,
    obtenerTicketPorId,
    actualizarTicket,
    eliminarTicket,
};