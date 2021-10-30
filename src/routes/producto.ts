import express from 'express'
import { findProductos } from '../controllers/producto'
import healthController from '../controllers/health'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Producto
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *         - categoria
 *         - stock
 *         - vendedor
 *         - metodosDePago
 *         - isActivo
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         precio:
 *           type: number
 *           description: Precio del producto
 *         categoria:
 *           type: string
 *           description: Categoria del producto
 *         stock:
 *           type: number
 *           description: Stock del producto
 *         vendedor:
 *           type: string
 *           description: Usuario del vendedor del producto
 *         metodosDePago:
 *           type: object
 *           description: Metodos de pago del producto
 *           required:
 *             - debito
 *             - credito
 *           properties:
 *             debito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de debito
 *             credito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de credito
 *         isActivo:
 *           type: bolean
 *           description: Activa o desactiva el producto
 *       example:
 *        nombre: Laptop Lenovo
 *        precio: 200000
 *        categoria: Notebook
 *        stock: 5
 *        vendedor: lenovo
 *        metodosDePago: {debito: true, credito: false}
 *        isActivo: true
 */
//#endregion

//#region Swagger findProductos
/**
 * @swagger
 * /api/v1/producto:
 *  get:
 *    summary: Trae todos los productos que son posibles de comprar (con stock mayor a 0 y activos de parte del vendedor).
 *    tags: [Producto]
 *    responses:
 *      200:
 *        description: Productos obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Producto'
 */
//#endregion
router.get('/api/v1/producto', findProductos)

router.get('/health', healthController.healthCheck)

export default router
