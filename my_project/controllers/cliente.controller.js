const { Cliente } = require("../models");

exports.crearCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  }catch (error) {
    console.error("Error creando cliente:", error);
    res.status(500).json({ error: "Error creando cliente" });
  }
};


exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};


exports.obtenerClientePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    console.error("Error obteniendo cliente:", error);
    res.status(500).json({ error: "Error obteniendo cliente" });
  }
}

exports.actualizarCliente = async (req, res) => {
  const { id } = req.params;
  try {
      console.log(req.body)
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await cliente.update(req.body);
  
    res.json(cliente);
  } catch (error) {
    console.error("Error actualizando cliente:", error);
    res.status(500).json({ error: "Error actualizando cliente" });
  }
}

exports.eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await cliente.destroy();
    res.status(204).send("Cliente eliminado");
  } catch (error) {
    console.error("Error eliminando cliente:", error);
    res.status(500).json({ error: "Error eliminando cliente" });
  }
}
