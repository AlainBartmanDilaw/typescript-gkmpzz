// lib/config/index.ts

import { Router } from "express";
import { apPrmRoutes } from './apPrmRoutes';
import { apTrtRoutes } from './apTrtRoutes';

export class Index {

    public index(): Router {
        const routes = Router();
        routes.use('/prm', new apPrmRoutes().createRoutes());
        routes.use('/trt', new apTrtRoutes().createRoutes());
        return routes;
    }
}
