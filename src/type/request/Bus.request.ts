export interface SaveBus{
     BussName: string ;
     BussSeats: number ;
     BussBookingDates:{ 
       Start_date:string,
       End_date:string
   };
  }
  export interface UpdateBus {
     _id:string;
     BussName: string;
     BussSeats:  number;
     BussBookingDates:{ 
       Start_date:string,
       End_date:string
   };
  }
  export interface GetBus {
     id: string
  }
  export interface DeleteBus {
     id: string
  }