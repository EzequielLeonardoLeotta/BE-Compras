import { Request, Response } from 'express';
import { findProductosService } from '../services/producto';

export const findProductos = async (req: Request, res: Response): Promise<void> => {
    try {
        await findProductosService(req, res);
    } catch (e) {
        throw e;
    }
};