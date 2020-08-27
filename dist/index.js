"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = __importDefault(require("./Util"));
const Recipes_1 = __importDefault(require("./Recipes"));
class HelloFreshApi {
    constructor(options) {
        const util = new Util_1.default(options);
        this.Recipes = new Recipes_1.default(util);
    }
}
exports.default = HelloFreshApi;
//# sourceMappingURL=index.js.map