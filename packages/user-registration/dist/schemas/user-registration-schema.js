"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const yup_1 = require("yup");
exports.createUserSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required('Missing required field name: Please provide a name.'),
        password: (0, yup_1.string)()
            .required('Missing required field password: Please provide a password')
            .min(6, 'Password should be at least 6 characters long'),
        email: (0, yup_1.string)().email('Please provide a valid email.').required(),
    }),
});
