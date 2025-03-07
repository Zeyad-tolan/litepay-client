import { changeReqStatus } from "./ changeReqStatus"
import { tracking } from "./tracking"
import { updateCard } from "./updateCard"

export const changeBalane = (reqId:string,cardId:string,balance:number,userId:number)=>{
    updateCard(cardId,{"balance":balance}).then(()=>{
        changeReqStatus(reqId,"success").then(()=>{
            tracking("balance_added",{
                userId: userId,
                cardId: cardId,
                requestId: reqId,
                newBalance: balance,
            })
        }).catch(err=>{
            console.log(err)
        })
    }).
    catch(err=>{
        console.log(err)
    })
}