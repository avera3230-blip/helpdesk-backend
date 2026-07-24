const express = require("express");

const {
    crearTicket,
    obtenerTickets,
    obtenerTicketPorId,
    actualizarTicket,
    eliminarTicket,
} = require("../controllers/TicketController");

const router = express.Router();

router.post("/", crearTicket);
router.get("/", obtenerTickets);
router.get("/:id", obtenerTicketPorId);
router.put("/:id", actualizarTicket);
router.delete("/:id", eliminarTicket);

module.exports = router;