import { Document } from 'mongoose';
export interface Bus extends Document {
  _id:string;
  BussName:  string ;
  BussSeats: number;
  BussBookingDates:{ 
    Start_date: string,
    End_date: string
   };
  createdAt?: string;
  updatedAt?: string;
}