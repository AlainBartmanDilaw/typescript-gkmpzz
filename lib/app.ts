// lib/app.ts

/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import * as http from 'http';
 import express from "express";
 import * as bodyParser from "body-parser";
 import helmet from 'helmet';
 import cors from 'cors';
 import { errorHandler } from '../middleware/error.middleware';
 import { notFoundHandler } from '../middleware/not-found.middleware';
 import { Index } from '../routes/index';
 
 class App {
     public app: express.Application;
     public routes: Index = new Index();
     private server: http.Server | undefined;
 
     constructor() {
         this.app = express();
 
         this.configBefore();
 
         this.app.use('/api', this.routes.index());
 
         this.configAfter();
     }
 
     /**
      *  App Configuration
      */
     private configBefore(): void {
         this.app.use(bodyParser.json());
         this.app.use(bodyParser.urlencoded({extended: false}));
 
         this.app.use(helmet());
         this.app.use(cors());
         this.app.use(express.json());
         // this.app.use("/api/menu/items", itemsRouter);
     }
 
     private configAfter(): void {
 
         this.app.use(errorHandler);
         this.app.use(notFoundHandler);
     }
 
     public listenTo(): void {
 
         /**
          * App Variables
          */
 
         dotenv.config();
 
         const PORT: number = parseInt(process.env.PORT as string, 10);
         if (!process.env.PORT) {
             process.exit(1);
         }
 
         this.server = this.app.listen(PORT, () => {
             console.log(`Listening on port ${PORT}`);
         });
     }
 
     close() {
         if (this.server !== undefined) {
             this.server.close();
         }
         console.log('Le serveur Express a été clôturé.');
     }
 }
 
 export default new App();
 