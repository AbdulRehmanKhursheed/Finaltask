import { Bus } from "../type/document/Bus_document";
import { BusAdmin } from "../repositories/Bus.repositorie";
import CustomeError from "../utills/error";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security} from "tsoa";
import { SaveUpdateResBus } from "../type/responses/Bus.response";
import { SaveTour } from "../type/request/Tour.request";
import { BussSchema } from '../models/Bus.model';
@Route("Tour")
@Tags("Tour endpoints")
@Security("api_key")
export class TourController {
  constructor() {}
  @Post("/savetourinfo")
  async savetour(@Body() no_of_participants:SaveTour): Promise<any> {
    // const new_product: any = await new BusAdmin().saveBus(<Bus>bus);
    // return <SaveUpdateResBus>new_product;
    return;
  }
//   @Post("/gettourinfo")
//   async gettour(@Body() getreq: GetBus): Promise<SaveUpdateResBus> {
//     const admin:any = await new BusAdmin().getBus(getreq.id);
//     if (admin === null) throw new CustomeError(404, "Bus not found");
//     return <SaveUpdateResBus>admin;
//   }

//   @Post("/gettourlist")
//   async gettourList(): Promise<SaveUpdateResBus[]> {
//     const admin: any[] = await new BusAdmin().getBuseslist();
//     return <SaveUpdateResBus[]>admin;
//   }
}
