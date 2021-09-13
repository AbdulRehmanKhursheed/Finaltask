import { BussSchema } from '../models/Bus.model';
import {Bus } from '../type/document/Bus_document';
export class BusAdmin {
  constructor() {}
  getBus(_id: string) {
    return BussSchema.findById(_id);
  }
  saveBus(Saving_bus: Bus) {
    return new BussSchema(Saving_bus).save();
  }
  updateBus(Updating_bus: Bus) {
    return BussSchema.findByIdAndUpdate(Updating_bus._id, Updating_bus, 
      {
      new: true
    });
  }
  deleteBus(_id: string) {
    return BussSchema.findByIdAndDelete(_id);
  }
  getBuseslist() {
   return BussSchema.find();
  }
 
}