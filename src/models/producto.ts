import { Schema, Document, model } from 'mongoose'

interface IMetodosDePago {
  debito: Boolean,
  credito: Boolean
}

export interface IProducto extends Document {
  nombre: String,
  precio: Number,
  categoria: String,
  stock: Number,
  vendedor: String,
  metodosDePago: IMetodosDePago
};

export const ProductoSchema = new Schema({
  nombre: String,
  precio: Number,
  categoria: String,
  stock: Number,
  vendedor: String,
  metodosDePago: Object
})

const Producto = model<IProducto>('Producto', ProductoSchema);
export default Producto;
