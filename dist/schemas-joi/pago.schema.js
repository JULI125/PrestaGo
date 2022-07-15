"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const pagoSchema = joi_1.default.object({
    id: joi_1.default.number(),
    fecha_pago_cuota: joi_1.default.date().required(),
    tiempo_pago: joi_1.default.number().required(),
    cuota_pagar: joi_1.default.number().required()
});
exports.default = pagoSchema;
//# sourceMappingURL=pago.schema.js.map