import express from 'express';
import { TourController } from '../controller/Tour.controller';
import { Bus } from '../type/document/Bus_document';
import { SaveTour} from '../type/request/Tour.request';
import { SaveUpdateResBus } from '../type/responses/Bus.response';
import CustomeError from '../utills/error';
import { BussSchema } from '../models/Bus.model';
const buses_allocation=require('../middleware/buses_allocation_middleware');
export class TourRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/savetourinfo', buses_allocation,async (req, res, next) => {
      try {
         const product: any = res.locals.ans;
         let arr=res.locals.ans;
         let buses:any='';
         let bus:Bus[]=[];
         for(let i=0;i<1;i++){
             buses=await BussSchema.find({BussSeats:arr[i]})
             for( let j=0;j<bus.length;j++){
                if( bus[j]._id==buses._id){
                    console.log('mani')
                }
                else{
                    bus.push(buses)
                }
             }
             
             bus.push(buses);
         }
         console.log(bus)
         
        const newProduct:SaveUpdateResBus = await new TourController().savetour(product);
        res.status(200).json({
          message: res.locals.ans
        });

     
      } catch (error) {
        next(error);
      }
    });
    // this.router.post('/gettourinfo', async (req, res, next) => {
    //   try {
    //     const getreq:GetBus = req.body;
    //       const admin:SaveUpdateResBus = await new TourController().gettour(getreq);
    //       res.send(admin);
    //   } catch (error) {
    //     next(res.send("Failed to get specified id's bus"));
    //   }
    // });
 
    // this.router.post('/gettourlist', async (req, res, next) => {
    //   try {
    //     const busList: SaveUpdateResBus[] = await new TourController().gettourList();
    //     res.status(200).json({
    //       result: busList
    //     });

    //   } catch (error) {
    //     next(error);
    //   }
    // });
    
  
}
}
export const TourRoutesApi = new TourRoutes().router;