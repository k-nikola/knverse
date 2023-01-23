"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegistrationRoutes = void 0;
const shared_1 = require("@knverse/shared");
const user_registration_schema_1 = require("../schemas/user-registration-schema");
const validate_registration_request_1 = require("../validators/validate-registration-request");
const user_registration_controller_1 = require("../controllers/user-registration-controller");
const userRegistrationConfig = shared_1.config.services.userRegistration;
function userRegistrationRoutes(app) {
    app.post('/api/users', (0, validate_registration_request_1.validateRegistrationRequest)(user_registration_schema_1.createUserSchema), user_registration_controller_1.createUserHandler);
    app.get('/api/health', (req, res) => {
        res.status(200).send({ health: 'OK', version: userRegistrationConfig.ver });
    });
}
exports.userRegistrationRoutes = userRegistrationRoutes;
