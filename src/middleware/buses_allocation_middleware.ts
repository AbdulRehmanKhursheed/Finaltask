import { NextFunction, Request, Response } from "express";
import { BussSchema } from '../models/Bus.model';
import { Bus } from '../type/document/Bus_document';
module.exports= async function (req: Request,res: Response, next: NextFunction){
    let participants=req.body.no_of_participants;
    const busesSeats:Bus[] =await BussSchema.find({"BussSeats":{$gt:0}})
    let busesArray:any[]=[];
    for(let i=0;i<busesSeats.length;i++){
        busesArray.push(busesSeats[i].BussSeats); 
    }
        
    let array:any[]=[6,5,2,8,8,2], sum:number=participants;
    function fork(i = 0, s = 0, t = []) {
        if (s === sum) {
            result.push(t);
            return;
        }
        if (i === array.length) {
            return;
        }
        if (s + array[i] <= sum) { // shout circuit for positive numbers only
            fork(i + 1, s + array[i], t.concat(array[i]));
        }
       
        fork(i + 1, s, t);
    }

    var result:any = [];
    fork();
    res.locals.ans=result;
    next();

}


