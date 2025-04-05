const express = require("express");
const app = express();
const connectDB = require("./config/db");
// Conectar a la base de datos ejemplo2
connectDB();
// Middleware para parsear JSON
app.use(express.json());
// Definir las rutas
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/pedidos", require("./routes/pedidos"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
