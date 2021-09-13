import express from 'express';
import { BusController } from '../controller/Bus.controller';
import { Bus } from '../type/document/Bus_document';
import { DeleteBus, GetBus, SaveBus, UpdateBus } from '../type/request/Bus.request';
import { SaveUpdateResBus } from '../type/responses/Bus.response';
import CustomeError from '../utills/error';

export class BusRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/savenewbus', async (req, res, next) => {
      try {
        const product: SaveBus = req.body;
        const newProduct:SaveUpdateResBus = await new BusController().savebus(product);
        res.status(200).json({
          message: newProduct
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getbus', async (req, res, next) => {
      try {
        const getreq:GetBus = req.body;
          const admin:SaveUpdateResBus = await new BusController().getbus(getreq);
          res.send(admin);
      } catch (error) {
        next(res.send("Failed to get specified id's bus"));
      }
    });
    this.router.put('/updatebus', async (req, res, next) => {
      try {
        const product: UpdateBus = req.body;
        const upadated_admin:SaveUpdateResBus = await new BusController().updatebus(product);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deletebus', async (req, res, next) => {
      try {
        const delreq:DeleteBus = req.body;
        const Deleted_product = await new BusController().deletebus(delreq);
        res.status(200).json({
          message: 'Bus information deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getbuslist', async (req, res, next) => {
      try {
        const busList: SaveUpdateResBus[] = await new BusController().getbusList();
        res.status(200).json({
          result: busList
        });

      } catch (error) {
        next(error);
      }
    });
    
  
}
}
export const BusRoutesApi = new BusRoutes().router;