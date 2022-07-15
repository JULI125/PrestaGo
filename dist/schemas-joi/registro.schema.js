"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const registroSchema = joi_1.default.object({
    nombre_completo: joi_1.default.string().required(),
    fecha_nacimiento: joi_1.default.date().required(),
    numero_celular: joi_1.default.number().required(),
    tipo_documento: joi_1.default.string().required(),
    n_documento: joi_1.default.number().required(),
    profesion_u_oficio: joi_1.default.string().required(),
    direccion: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    rol: joi_1.default.string().required(),
    contrasena: joi_1.default.string().required()
});
exports.default = registroSchema;
//# sourceMappingURL=registro.schema.js.map