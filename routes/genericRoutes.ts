import { Router } from 'express';

export class GenericRoutes {

    myController: any;

    constructor(controller: any) {
        this.myController = controller;
    }

    public createRoutes(): Router {
        const routes = Router();
        routes.get("/", this.myController.all);
        routes.route("/:id")
            .delete(this.myController.remove)
            .get(this.myController.getById);
        routes.post('/', this.myController.createSchema, this.myController.create);
        return routes;
    }
}
