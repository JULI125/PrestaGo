"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const service_account_key_json_1 = __importDefault(require("../firebase/service-account-key.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(service_account_key_json_1.default),
});
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase.js.map