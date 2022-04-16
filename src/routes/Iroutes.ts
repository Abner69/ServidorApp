import {Router} from 'express';
import {institutosController} from '../controllers/institutoController'
class IRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', institutosController.list);
        this.router.get('/:id', institutosController.listOne );
        this.router.get('/:correo/:password', institutosController.existe);
    }
}

const Iroutes = new IRoutes();
export default Iroutes.router;