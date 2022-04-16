import { Request, Response } from "express";
import pool from "../database";
class ProfesoresController {
  public async list(req: Request, res: Response): Promise<void> {
    const respuesta = await pool.query(
      "SELECT P.*,I.nombre as nombre_instituto, C.nombre as nombre_carrera FROM Profesor as P INNER JOIN Instituto as I ON P.idInstituto = I.idInstituto INNER JOIN Carrera as C ON P.IdCarrera = C.idCarrera ORDER BY idProfesor"
    );
    console.log(respuesta);
    res.json(respuesta);
  }
  //MODIFICAR
  public async existe(req: Request, res: Response): Promise<void> {
    const { correo, password } = req.params;
    const respuesta = await pool.query(
      "SELECT idUsuario FROM Usuarios WHERE correo = ? AND password = ?",
      [correo, password]
    );
    if (respuesta.length > 0) {
      res.json(respuesta[0]);
      return;
    }
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  public async profesorTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const respuesta = await pool.query(
      "SELECT P.*,I.nombre as nombre_instituto, C.nombre as nombre_carrera FROM Profesor as P INNER JOIN Instituto as I ON P.idInstituto = I.idInstituto INNER JOIN Carrera as C ON P.IdCarrera = C.idCarrera WHERE idProfesor = ?",
      [id]
    );
    if (respuesta.length > 0) {
      res.json(respuesta[0]);
      return;
    }
    res.status(404).json({ mensaje: "Profesor no encontrado" });
  }
}
export const profesoresController = new ProfesoresController();
