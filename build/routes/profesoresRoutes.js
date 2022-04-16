"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesoresController_1 = require("../controllers/profesoresController");
class ProfesoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',(req,res) => res.send('probando usuarios'));
        this.router.get("/", profesoresController_1.profesoresController.list);
        this.router.get("/:id", profesoresController_1.profesoresController.profesorTodo);
        //this.router.get('/:correo/:password',profesoresController.existe );
        //this.router.get('/:id',institutosController.listOne);
    }
}
const profesoresRoutes = new ProfesoresRoutes();
exports.default = profesoresRoutes.router;
