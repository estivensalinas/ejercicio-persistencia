const { Pedido } = require("../models");

exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};

exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};

exports.obtenerPedidoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    res.json(pedido);
  } catch (error) {
    console.error("Error obteniendo pedido:", error);
    res.status(500).json({ error: "Error obteniendo pedido" });
  }
}

exports.actualizarPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    await pedido.update(req.body);

    res.json(pedido);
  } catch (error) {
    console.error("Error actualizando pedido:", error);
    res.status(500).json({ error: "Error actualizando pedido" });
  }
}

exports.eliminarPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    await pedido.destroy();
    res.status(204).send("Pedido eliminado");
  } catch (error) {
    console.error("Error eliminando pedido:", error);
    res.status(500).json({ error: "Error eliminando pedido" });
  }
}
