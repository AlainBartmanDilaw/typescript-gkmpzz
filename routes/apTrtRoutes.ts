// lib/config/index.ts

import { ap } from "../controllers/aptrt.controller"
import { GenericRoutes } from './genericRoutes';

export class apTrtRoutes extends GenericRoutes {

    constructor() {
        super(new ap.TrtController());
    }

}
