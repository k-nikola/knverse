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
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("@knverse/shared");
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield shared_1.userModel.create(input);
        }
        catch (err) {
            throw err;
        }
    });
}
function updateUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // update user
        }
        catch (err) {
            throw err;
        }
    });
}
