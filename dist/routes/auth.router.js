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
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../firebase/auth"));
const validator_1 = __importDefault(require("../utilities/validator"));
const auth_schemas_1 = __importDefault(require("../schemas-joi/auth.schemas"));
exports.authRouter = express_1.default.Router();
exports.authRouter.use(express_1.default.json());
exports.authRouter.post('/createUser', validator_1.default.body(auth_schemas_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = _req.body;
        const result = yield auth_1.default.createUser(email, password);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.authRouter.post('/logIn', validator_1.default.body(auth_schemas_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = _req.body;
        const result = yield auth_1.default.createUser(email, password);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//# sourceMappingURL=auth.router.js.map