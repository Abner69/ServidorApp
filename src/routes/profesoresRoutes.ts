import { Router } from "express";
import { profesoresController } from "../controllers/profesoresController";
class ProfesoresRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    //this.router.get('/',(req,res) => res.send('probando usuarios'));
    this.router.get("/", profesoresController.list);
    this.router.get("/:id", profesoresController.profesorTodo);
    //this.router.get('/:correo/:password',profesoresController.existe );
    //this.router.get('/:id',institutosController.listOne);
  }
}
const profesoresRoutes = new ProfesoresRoutes();
export default profesoresRoutes.router;
