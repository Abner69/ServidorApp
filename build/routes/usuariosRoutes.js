"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',(req,res) => res.send('probando usuarios'));
        this.router.get('/', usuariosController_1.usuariosController.list);
        this.router.get('/:correo/:password', usuariosController_1.usuariosController.existe);
        //this.router.get('/:id',institutosController.listOne);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
