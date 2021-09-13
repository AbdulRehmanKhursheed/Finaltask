import express from 'express';
import { BusRoutesApi } from "./Bus.Routes";
import { TourRoutesApi } from "./Tour.Routes";
// import { AuthRoutesApi } from "./Auth.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/bus',BusRoutesApi);
        this.router.use('/tour',TourRoutesApi);
    }


}
export const MainApi = new MainRouter().router;