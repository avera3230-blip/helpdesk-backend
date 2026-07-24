const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const conectarDB = require("./config/database");

// Conectar a MongoDB
conectarDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});