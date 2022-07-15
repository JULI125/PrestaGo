"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const presta_router_1 = __importDefault(require("../src/routes/presta.router"));
const database_service_1 = require("./services/database.service");
const database2_1 = require("./services/database2");
const presta_routermongo_1 = require("./routes/presta.routermongo");
const auth_router_1 = require("../src/routes/auth.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PrestaGo',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./dist/docs/*.js']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
(0, database_service_1.connectToDatabase)(), (0, database2_1.connectDatabase)()
    .then(() => {
    app.use("/", presta_routermongo_1.prestaRouter);
    app.use("/auth", auth_router_1.authRouter);
    app.use("/api", presta_router_1.default);
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map