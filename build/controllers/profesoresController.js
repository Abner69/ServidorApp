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
exports.profesoresController = void 0;
const database_1 = __importDefault(require("../database"));
class ProfesoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query("SELECT P.*,I.nombre as nombre_instituto, C.nombre as nombre_carrera FROM Profesor as P INNER JOIN Instituto as I ON P.idInstituto = I.idInstituto INNER JOIN Carrera as C ON P.IdCarrera = C.idCarrera ORDER BY idProfesor");
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    //MODIFICAR
    existe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.params;
            const respuesta = yield database_1.default.query("SELECT idUsuario FROM Usuarios WHERE correo = ? AND password = ?", [correo, password]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ mensaje: "Usuario no encontrado" });
        });
    }
    profesorTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query("SELECT P.*,I.nombre as nombre_instituto, C.nombre as nombre_carrera FROM Profesor as P INNER JOIN Instituto as I ON P.idInstituto = I.idInstituto INNER JOIN Carrera as C ON P.IdCarrera = C.idCarrera WHERE idProfesor = ?", [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ mensaje: "Profesor no encontrado" });
        });
    }
}
exports.profesoresController = new ProfesoresController();
