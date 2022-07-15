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
const config_1 = __importDefault(require("./config"));
const auth_1 = require("firebase/auth");
const auth = (0, auth_1.getAuth)(config_1.default.app);
const createUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, auth_1.createUserWithEmailAndPassword)(auth, email, password)
        .then(userCredential => {
        const user = userCredential.user;
        return { error: false, data: user };
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { error: true, data: error };
    });
    return response;
});
const logIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, auth_1.signInWithEmailAndPassword)(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        return { error: false, data: user };
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { error: true, data: error };
    });
    return result;
});
exports.default = { createUser, logIn };
//# sourceMappingURL=auth.js.map