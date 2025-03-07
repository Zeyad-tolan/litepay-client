import Cookies from "js-cookie"
import toast from "react-hot-toast"
import { changeReqStatus } from "./ changeReqStatus"
import { tracking } from "./tracking"

export const addCard = (data:{[k: string]: FormDataEntryValue},id:string,userId:number,cardType:string,setShow:React.Dispatch<React.SetStateAction<boolean>>)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}cards`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': `${Cookies.get('token')}`
            },
            body:JSON.stringify({...data,"type":"debit","cardBalance":+(data.cardBalance as string),"requestId":id})
        }).then(res=>{
            if(res.ok){
                return res.json()
            }
            else{
                return res.json().then((errorData) => {
                    throw new Error(errorData.message || 'An error occurred');
                });
            }
        }).then(res=>{
            toast.success(res.message)
            changeReqStatus(id,"success")
            tracking("card_added",{
                userId: userId,
                cardId: data.bankId as string,
                requestId: id,
                cardType,
            })
            setShow(false)
        }).catch(err=>{
            toast.error(err.message)
        })
}