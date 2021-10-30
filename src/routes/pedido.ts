import express from 'express'
import { savePedido } from '../controllers/pedido'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Pedido
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - comprador
 *         - vendedor
 *         - productos
 *       properties:
 *         comprador:
 *           type: string
 *           description: Nombre del comprador
 *         vendedor:
 *           type: string
 *           description: Nombre del vendedor
 *         productos:
 *           type: object
 *           description: Productos incluidos en el pedido
 *           required:
 *             - idProducto
 *             - cantidad
 *           properties:
 *             idProducto:
 *               type: string
 *               description: Id del producto
 *             cantidad:
 *               type: number
 *               description: Cantidad del producto solicitado
 *         estado:
 *           type: string
 *           description: Estado del pedido
 *         fechaDeCreacion:
 *           type: Date
 *           description: Fecha de creacion del pedido
 *       example:
 *        comprador: ma_galperion
 *        vendedor: eze_leotta
 *        productos: {idProducto: asd64a6s5d46as54dasd, cantidad: 5}
 *        estado: En proceso
 *        fechaDeCreacion: Fri Oct 29 2021 21:14:50 GMT-0300
 */
//#endregion

//#region Swagger saveUsuario
/**
 * @swagger
 * /api/v1/pedido:
 *   post:
 *     summary: Genera un pedido nuevo
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: El pedido se creo correctamente
 *       500:
 *         description: No se pudo crear el pedido
 */
//#endregion
router.post('/api/v1/pedido', savePedido)

export default router
