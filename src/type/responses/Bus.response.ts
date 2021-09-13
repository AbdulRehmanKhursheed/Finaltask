export interface SaveUpdateResBus {
    _id:string;
    BussName: { type: string };
    BussSeats: { type: number };
    BussBookingDates:{ 
      Start_date:{type:string},
      End_date:{type:string}
    };
    createdAt: string;
    updatedAt: string;
  }