"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutoController_1 = require("../controllers/institutoController");
class IRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', institutoController_1.institutosController.list);
        this.router.get('/:id', institutoController_1.institutosController.listOne);
        this.router.get('/:correo/:password', institutoController_1.institutosController.existe);
    }
}
const Iroutes = new IRoutes();
exports.default = Iroutes.router;
