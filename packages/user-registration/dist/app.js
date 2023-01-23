"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shared_1 = require("@knverse/shared");
const user_registartion_routes_1 = require("./routes/user-registartion-routes");
const db_1 = require("@knverse/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const userRegistrationConfig = shared_1.config.services.userRegistration;
const dbUri = shared_1.config.db.uri;
app.listen(userRegistrationConfig.port, () => {
    console.log(`⚡️[server]: Launching user registration service version ${userRegistrationConfig.ver}`);
    console.log(`⚡️[server]: Server listening at http://localhost:${userRegistrationConfig.port}`);
    (0, db_1.connectToDb)(dbUri);
});
(0, user_registartion_routes_1.userRegistrationRoutes)(app);
exports.default = app;
