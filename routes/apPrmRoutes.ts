// lib/config/index.ts

import { ap } from "../controllers/apprm.controller"
import { GenericRoutes } from './genericRoutes';

export class apPrmRoutes extends GenericRoutes {
    constructor() {
        super(new ap.PrmController());
    }
}
