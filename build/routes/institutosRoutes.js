"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutosController_1 = require("../controllers/institutosController");
class InstitutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', institutosController_1.institutosController.list);
        this.router.get('/:id', institutosController_1.institutosController.listOne);
        this.router.get('/:correo/:password', institutosController_1.institutosController.existe);
    }
}
const institutosRoutes = new InstitutosRoutes();
exports.default = institutosRoutes.router;
