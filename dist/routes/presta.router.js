"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminTokens_1 = require("../firebase/adminTokens");
const express_joi_validation_1 = require("express-joi-validation");
const validator_1 = __importDefault(require("../utilities/validator"));
const registro_schema_1 = __importDefault(require("../schemas-joi/registro.schema"));
const prestamo_schema_1 = __importDefault(require("../schemas-joi/prestamo.schema"));
const pago_schema_1 = __importDefault(require("../schemas-joi/pago.schema"));
const bienvenida_1 = __importDefault(require("../utilities/bienvenida"));
const templateid_const_1 = __importDefault(require("../constants/templateid.const"));
const pool = require('../services/db');
const router = (0, express_1.Router)();
router.use((err, _req, res, next) => {
    if (err && err.type in express_joi_validation_1.ContainerTypes) {
        const e = err;
        res.status(400).send(`You submitted a bad ${e.type} paramater`);
    }
    else {
        res.status(500).send('Internal server error');
    }
});
router.get('/registro', adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const result = yield pool.query('SELECT * FROM registro;');
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.get('/registro/:id', adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = parseInt(req.params.id);
    const result = yield pool.query('SELECT * FROM registro WHERE id = $1;', [id]);
    try {
        return res.json(result.rows[0]);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.post("/registro", validator_1.default.body(registro_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { nombre_completo, fecha_nacimiento, numero_celular, tipo_documento, n_documento, profesion_u_oficio, direccion, email, rol, contrasena } = req.body;
    const result = yield pool.query('INSERT INTO registro (nombre_completo, fecha_nacimiento, numero_celular, tipo_documento, n_documento, profesion_u_oficio, direccion, email, rol, contrasena) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);', ([nombre_completo, fecha_nacimiento, numero_celular, tipo_documento, n_documento, profesion_u_oficio,
        direccion, email, rol, contrasena]));
    console.log(email, nombre_completo);
    try {
        yield (0, bienvenida_1.default)(email, {
            subject: 'Validate email',
            nombre_completo,
        }, templateid_const_1.default.SEND_CODE);
        return res.status(200).send(`Registro creado con exito`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.put("/registro/:id", adminTokens_1.decodeToken, validator_1.default.body(registro_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = parseInt(req.params.id);
    const { nombre_completo, fecha_nacimiento, numero_celular, tipo_documento, n_documento, profesion_u_oficio, direccion, email, rol, contrasena } = req.body;
    const result = yield pool.query('UPDATE registro SET nombre_completo = $1, fecha_nacimiento = $2, numero_celular = $3, tipo_documento = $4, n_documento = $5, profesion_u_oficio = $6, direccion = $7, email = $8, rol = $9, contrasena = $10 WHERE id = $11;', [nombre_completo, fecha_nacimiento, numero_celular, tipo_documento, n_documento, profesion_u_oficio, direccion, email, rol, contrasena, id]);
    try {
        return res.status(200).json(`Registro editado con exito`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.delete("/registro/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { id } = req.params;
    yield pool.query(`DELETE FROM registro WHERE id = ${id};`);
    try {
        return res.status(200).json('User deleted successfully');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
    finally {
        cliente.release(true);
    }
}));
router.get("/prestamo", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const result = yield pool.query('SELECT * FROM prestamo;');
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.get("/prestamo1/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const result = yield pool.query('SELECT cuota_pagar AS cuota, saldo_restante AS saldo_faltante FROM pago;');
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.get("/prestamo/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    console.log('params: ');
    const id = parseInt(req.params.id);
    const result = yield pool.query('SELECT * FROM prestamo WHERE id = $1;', [id]);
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.post("/prestamo", validator_1.default.body(prestamo_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { nombre_completo, fecha_creacion, monto_prestar, plazo_en_meses, taza_interes, estado, n_cedula } = req.body;
    const id_usuario = yield pool.query('SELECT id FROM registro WHERE n_documento = $1', [n_cedula]);
    const result = yield pool.query('INSERT INTO prestamo (nombre_completo, fecha_creacion, monto_prestar, plazo_en_meses, taza_interes, estado, id_registro) VALUES ($1,$2,$3,$4,$5,$6,$7);', ([nombre_completo, fecha_creacion, monto_prestar, plazo_en_meses, taza_interes, estado, (id_usuario.rows[0]).id]));
    const email = yield pool.query('SELECT * FROM registro WHERE nombre_completo = $1;', [nombre_completo]);
    try {
        if (estado === 'aprobado') {
            yield (0, bienvenida_1.default)(email.rows[0].email, {
                subject: 'Validate email',
                nombre_completo,
            }, templateid_const_1.default.SEND_CODE1);
        }
        else {
            yield (0, bienvenida_1.default)(email.rows[0].email, {
                subject: 'Validate email',
                nombre_completo,
            }, templateid_const_1.default.SEND_CODE2);
        }
        console.log(email);
        console.log(result);
        return res.status(200).json(`Prestamo creado con exito`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.put("/prestamo/:id", adminTokens_1.decodeToken, validator_1.default.body(prestamo_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = parseInt(req.params.id);
    const { nombre_completo, fecha_creacion, monto_prestar, plazo_en_meses, taza_interes, estado } = req.body;
    const result = yield pool.query('UPDATE prestamo SET nombre_completo = $1, fecha_creacion = $2, monto_prestar = $3, plazo_en_meses = $4, taza_interes = $5, estado = $6 WHERE id = $7;', [nombre_completo,
        fecha_creacion,
        monto_prestar,
        plazo_en_meses,
        taza_interes,
        estado,
        id
    ]);
    try {
        return res.status(200).json(`Prestamo editado con exito`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.delete("/prestamo/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { id } = req.params;
    yield pool.query(`DELETE FROM prestamo  WHERE id = ${id};`);
    try {
        return res.status(200).json('lend lease deleted successfully');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
    finally {
        cliente.release(true);
    }
}));
router.get("/pago", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const result = yield pool.query('SELECT * FROM pago;');
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.get("/pago/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    console.log('params: ');
    const id = parseInt(req.params.id);
    const result = yield pool.query('SELECT * FROM pago WHERE id = $1;', [id]);
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.post("/pago", adminTokens_1.decodeToken, validator_1.default.body(pago_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { fecha_pago_cuotas, cuota_pagar, cuota_faltante, saldo_restante, id_prestamo, id_registro, score } = req.body;
    const result = yield pool.query('INSERT INTO pago (fecha_pago_cuotas, cuota_pagar, cuota_faltante, saldo_restante, id_prestamo, id_registro, score) VALUES ($1,$2,$3,$4,$5,$6,$7);', ([fecha_pago_cuotas, cuota_pagar, cuota_faltante, saldo_restante, id_prestamo, id_registro, score]));
    try {
        return res.status(200).json({
            message: 'pyment register successfully',
            body: {
                user: { fecha_pago_cuotas, cuota_pagar, cuota_faltante, saldo_restante, id_prestamo, id_registro, score }
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.put("/pago/:id", adminTokens_1.decodeToken, validator_1.default.body(pago_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = req.params.id;
    const cuota_pagar = req.body;
    let actual = yield cliente.query('SELECT * FROM pago WHERE id = $1;', [id]);
    let { saldo_restante } = actual.rows[0];
    console.log(cuota_pagar.cuota_pagar);
    let total = saldo_restante - cuota_pagar.cuota_pagar;
    console.log(total);
    yield cliente.query('UPDATE pago SET saldo_restante = $1, cuota_pagar = $2 WHERE id = $3;', [total, cuota_pagar.cuota_pagar, id]);
    try {
        return res.status(200).json(total);
    }
    catch (error) {
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.put("/pagoScore/:id", adminTokens_1.decodeToken, validator_1.default.body(pago_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = req.params.id;
    let saldo_restante = yield pool.query('SELECT * FROM pago WHERE id = $1;', [id]);
    try {
        if ((saldo_restante.rows[0]).saldo_restante === 0) {
            (saldo_restante.rows[0]).score += 20;
            const result = yield pool.query(`UPDATE pago SET score = $1 WHERE id = ${id};`, [(saldo_restante.rows[0]).score]);
            return res.status(200).json((saldo_restante.rows[0]).score);
        }
        else {
            return res.status(400).json('Score failed');
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
    finally {
        cliente.release(true);
    }
}));
router.put("/pago1/:id", adminTokens_1.decodeToken, validator_1.default.body(pago_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const id = req.params.id;
    let { fecha_pago_cuotas, cuota_pagar, cuotas_faltantes, saldo_restante, id_prestamo, id_registro, score } = req.body;
    const result = yield pool.query('UPDATE pago SET fecha_pago_cuotas = $1, cuota_pagar = $2, cuotas_faltantes = $3, saldo_restante = $4, id_prestamo = $5, id_registro = $6, score = $7  WHERE id = $8;', [fecha_pago_cuotas,
        cuota_pagar,
        cuotas_faltantes,
        saldo_restante,
        id_prestamo,
        id_registro,
        score,
        id
    ]);
    try {
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    finally {
        cliente.release(true);
    }
}));
router.delete("/pago/:id", adminTokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield pool.connect();
    const { id } = req.params;
    yield pool.query(`DELETE FROM pago  WHERE id = ${id};`);
    try {
        return res.status(200).json('payment deleted successfully');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
    finally {
        cliente.release(true);
    }
}));
exports.default = router;
//# sourceMappingURL=presta.router.js.map