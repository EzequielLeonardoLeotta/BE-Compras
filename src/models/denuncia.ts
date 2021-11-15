import { Schema, Document, model } from 'mongoose'

export interface IDenuncia extends Document {
  idProducto: String,
  categoria: String,
  comentario: String,
  estado: String
};

export const DenunciaSchema = new Schema({
  idProducto: String,
  categoria: String,
  comentario: String,
  estado: String
})

const Denuncia = model<IDenuncia>('Denuncia', DenunciaSchema);
export default Denuncia;
