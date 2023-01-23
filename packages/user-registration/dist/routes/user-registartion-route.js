"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegistrationRoute = void 0;
const shared_1 = require("@knverse/shared");
const userRegistrationConfig = shared_1.config.services.userRegistration;
function userRegistrationRoute(app) {
    app.get('/api/health', (req, res) => {
        res.status(200).send({ health: 'OK', version: userRegistrationConfig.ver });
    });
}
exports.userRegistrationRoute = userRegistrationRoute;
