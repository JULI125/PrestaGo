import Joi, { number, string, date } from 'joi';

 const pagoSchema = Joi.object({
    id: Joi.number(),
    fecha_pago_cuota: Joi.date().required(),
    tiempo_pago: Joi.number().required(),
    cuota_pagar: Joi.number().required()

 });
export default pagoSchema;