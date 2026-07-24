const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/tickets", ticketRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API HelpDesk funcionando correctamente",
    });
});

module.exports = app;