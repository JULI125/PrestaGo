"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
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
