import Joi, { number, string, date } from 'joi';

const prestamoSchema = Joi.object({
    id: Joi.number(),
    nombre_completo: Joi.string().required(),
    monto_prestar: Joi.number().required(),
    plazo_en_meses: Joi.string().required(),
    fecha_creacion: Joi.date().required(),
    tasa_interes: Joi.string(),
    estado: Joi.string()
 });

 export default prestamoSchema;