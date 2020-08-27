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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
class Util {
    constructor(config) {
        this.config = config;
    }
    keysToURLParams(keys) {
        let params_string = "";
        Object.keys(keys).forEach((key, index) => {
            params_string += `${index ? "&" : "?"}${key}=${keys[key]}`;
        });
        return encodeURI(params_string);
    }
    query(route, query = {}) {
        const params = Object.assign(Object.assign({}, query), { country: this.config.country, locale: this.config.locale });
        let urlParams = this.keysToURLParams(params);
        const path = `/api/${route}${urlParams}`;
        return this.httpGetAsync(path);
    }
    httpGetAsync(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const request = https_1.default.request({
                    host: "gw.hellofresh.com",
                    path,
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${this.config.bearerToken}`,
                    },
                }, (response) => {
                    if (response.statusCode < 200 || response.statusCode > 299) {
                        reject(new Error("Failed to load page, status code: " + response.statusCode));
                    }
                    let data = "";
                    response.on("data", (chunk) => {
                        data += chunk;
                    });
                    response.on("end", () => {
                        resolve(JSON.parse(data));
                    });
                });
                request.on("error", (error) => reject(error));
                request.end();
            });
        });
    }
}
exports.default = Util;
//# sourceMappingURL=Util.js.map