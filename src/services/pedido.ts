import { Request, Response } from 'express'
import Pedido from '../models/pedido'

// estado: string. Lo agrega el back end además del array de productos (En proceso, Cancelado, Despachado, Entregado). Actualiza el stock de los productos. fechaDeCreacion: DateTime. Por cada venta pegarle al PUT: producto y actualizar el isVendido a true
// POST: pedido(comprador: string, vendedor: string, Productos[{idProducto: string, cantidad: number}]) => void
export const savePedidoService = async (req: Request, res: Response) => {
  try {
    const pedido = new Pedido(req.body)
    //Agrego atributo estado en proceso porque recien se crea el pedido
    pedido.estado = 'En proceso'
    //Agrego la fecha de creacion del pedido
    pedido.fechaDeCreacion = new Date()

    await pedido.save()
    return res.status(200).send('Pedido generado correctamente')
  } catch (error) {
    res.status(500).send('Error: No se pudo guardar el usuario')
  }
}