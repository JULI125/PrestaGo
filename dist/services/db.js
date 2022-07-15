"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.USER_DB,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DB_POSG,
    port: 5432
});
try {
    console.log("Connecting to database...");
}
catch (error) {
    console.log("Error connecting to database...");
}
module.exports = pool;
//# sourceMappingURL=db.js.map