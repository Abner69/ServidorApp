import { Router } from 'express';
import {institutosController} from '../controllers/institutosController';
class InstitutosRoutes
{
	public router: Router=Router();
	constructor()
	{
		this.config();
	}
	config() : void
	{ 
		
		this.router.get('/',institutosController.list );
		this.router.get('/:id',institutosController.listOne);
		this.router.get('/:correo/:password', institutosController.existe);
		
	}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;