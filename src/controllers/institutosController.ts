import { Request, Response } from "express";
import pool from "../database";
class InstitutosController {
  public async list(req: Request, res: Response): Promise<void> {
    const respuesta = await pool.query(
      "SELECT * FROM Instituto order by idInstituto"
    );
    console.log(respuesta);
    res.json(respuesta);
  }

  public async listOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const respuesta = await pool.query(
      "SELECT * FROM Instituto WHERE idInstituto = ?",
      [id]
    );
    if (respuesta.length > 0) {
      res.json(respuesta[0]);
      return;
    }
    res.status(404).json({ mensaje: "Instituto no encontrado" });
  }

  public async existe(req: Request, res: Response): Promise<void> {
    const { correo, password } = req.params;
    const respuesta = await pool.query(
      "SELECT idUsuario FROM Usuarios WHERE Correo = ? AND Password =?",
      [correo, password]
    );
    if (respuesta.length > 0) {
      res.json(respuesta[0]);
      return;
    }
    res.status(404).json({ mensaje: "No encontrada" });
  }
}
export const institutosController = new InstitutosController();
