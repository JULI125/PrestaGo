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
exports.prestaRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const adminTokens_1 = require("../firebase/adminTokens");
const database_service_1 = require("../services/database.service");
const database2_1 = require("../services/database2");
const express_joi_validation_1 = require("express-joi-validation");
const validator_1 = __importDefault(require("../utilities/validator"));
const user_no_schema_1 = __importDefault(require("../schemas-joi/user.no.schema"));
exports.prestaRouter = express_1.default.Router();
exports.prestaRouter.use(express_1.default.json());
exports.prestaRouter.use((err, _req, res, next) => {
    if (err && err.type in express_joi_validation_1.ContainerTypes) {
        const e = err;
        res.status(400).send(`You submitted a bad ${e.type} paramater`);
    }
    else {
        res.status(500).send('Internal server error');
    }
});
exports.prestaRouter.get("/mongo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const simulator = yield database_service_1.collections.user_no_register.find({}).toArray();
    const position = simulator[parseFloat(id)];
    const interes = 0.25;
    let monto = position.monto_prestar;
    let plazo = position.plazo_meses;
    let total = monto * interes * parseFloat(plazo);
    try {
        return res.status(200).json(total);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.prestaRouter.get("/score", adminTokens_1.decodeToken, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const score = yield database2_1.collection.score.find({}).toArray();
        res.status(200).send(score);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.prestaRouter.post("/mongo", adminTokens_1.decodeToken, validator_1.default.body(user_no_schema_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser_no_register = _req.body;
        const result = yield database_service_1.collections.user_no_register.insertOne(newUser_no_register);
        result
            ? res.status(201).send(`Successfully created a new user no register with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new user no register.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
exports.prestaRouter.put("/mongo:id", adminTokens_1.decodeToken, validator_1.default.body(user_no_schema_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    try {
        const updatedUser_no_register = _req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.user_no_register.updateOne(query, { $set: updatedUser_no_register });
        result
            ? res.status(200).send(`Successfully updated user with id ${id}`)
            : res.status(304).send(`User with id: ${id} not updated`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
exports.prestaRouter.delete("mongo/:id", adminTokens_1.decodeToken, validator_1.default.body(user_no_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.user_no_register.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed user with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove user no register with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`User with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=presta.routermongo.js.map