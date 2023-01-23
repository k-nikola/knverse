"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const config_1 = __importDefault(require("./config"));
// Utility function to get a config value by key
function getConfig(key) {
    return config_1.default[key];
}
exports.getConfig = getConfig;
// Other utility functions...
