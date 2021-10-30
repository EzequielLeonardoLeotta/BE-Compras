import { Request, Response } from 'express';
import { savePedidoService } from '../services/pedido';

export const savePedido = async (req: Request, res: Response): Promise<void> => {
    try {
        await savePedidoService(req, res);
    } catch (e) {
        throw e;
    }
};