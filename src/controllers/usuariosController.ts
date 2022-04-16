import { Request, Response } from "express";
import pool from "../database";
class UsuariosController {
  public async list(req: Request, res: Response): Promise<void> {
    const respuesta = await pool.query(
      "SELECT * FROM Usuarios order by idUsuario"
    );
    console.log(respuesta);
    res.json(respuesta);
  }
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
}
export const usuariosController = new UsuariosController();
