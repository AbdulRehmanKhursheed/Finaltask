import { Bus } from "../type/document/Bus_document";
import { BusAdmin } from "../repositories/Bus.repositorie";
import CustomeError from "../utills/error";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security} from "tsoa";
import { SaveUpdateResBus } from "../type/responses/Bus.response";
import { DeleteBus, GetBus, SaveBus, UpdateBus, } from "../type/request/Bus.request";
@Route("Bus")
@Tags("Bus")
@Security("api_key")
export class BusController {
  constructor() {}
  @Post("/savenewbus")
  async savebus(@Body() bus: SaveBus): Promise<SaveUpdateResBus> {
    const new_product: any = await new BusAdmin().saveBus(<Bus>bus);
    return <SaveUpdateResBus>new_product;
  }
  @Post("/getbus")
  async getbus(@Body() getreq: GetBus): Promise<SaveUpdateResBus> {
    const admin:any = await new BusAdmin().getBus(getreq.id);
    if (admin === null) throw new CustomeError(404, "Bus not found");
    return <SaveUpdateResBus>admin;
  }
  @Put("/updatebus")
  async updatebus(
    @Body() product: UpdateBus): Promise<SaveUpdateResBus> {
    const update_product:any = await new BusAdmin().updateBus(<Bus>product);
    if (update_product === null)
      throw new CustomeError(400, "Bus details not updated");
    return <SaveUpdateResBus>update_product;
  }
  @Delete("/deletebus")
  @SuccessResponse("200", "Product deleted")
  async deletebus(@Body() delreq: DeleteBus): Promise<any> {
    return await new BusAdmin().deleteBus(delreq.id);
  }
  @Post("/getbuslist")
  async getbusList(): Promise<SaveUpdateResBus[]> {
    const admin: any[] = await new BusAdmin().getBuseslist();
    return <SaveUpdateResBus[]>admin;
  }
}
