import { Schema, model } from "mongoose";
import { Bus } from "../type/document/Bus_document";
import mongoose from "mongoose";
const TourSchema = new Schema(
  {
    // _id: { type: String },
    BussName: { type: String },
    BussSeats: { type: Number },
    BussBookingDates:{ 
      Start_date:{type:String},
      End_date:{type:String}
     },
  },
  { timestamps: true }
);

export const ToursSchema = model<Bus>("TourSchema", TourSchema);
