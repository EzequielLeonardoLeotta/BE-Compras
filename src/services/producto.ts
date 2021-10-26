import { Request, Response } from 'express'
import Producto, { IProducto } from '../models/producto'

//no traer los que tengan stock en 0
//GET: producto => Productos[{idProducto: string, nombre: string, precio: number, categoria: string, stock: number, vendedor: string(usuario), metodosDePago: {débito: boolean, crédito: boolean}}]
export const findProductosService = async (req: Request, res: Response) => {
  const productos = await Producto.find({ stock: { $gt: 0 }, isActivo: true }).exec()
  return res.status(200).send(productos)
}