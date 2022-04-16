import { Router } from 'express';
import {usuariosController} from '../controllers/usuariosController';
class UsuariosRoutes
{
	public router: Router=Router();
	constructor()
	{
		this.config();
	}
	config() : void
	{
		//this.router.get('/',(req,res) => res.send('probando usuarios'));
		this.router.get('/',usuariosController.list );
		this.router.get('/:correo/:password',usuariosController.existe );
		//this.router.get('/:id',institutosController.listOne);
		
	}
}
const usuariosRoutes= new UsuariosRoutes();
export default usuariosRoutes.router;