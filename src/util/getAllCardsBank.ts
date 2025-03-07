import Cookies from "js-cookie";
import { allCardsBank } from "../types/allCardsBank";
export const getAllCardsBank = (setData:React.Dispatch<React.SetStateAction<allCardsBank[] | null>>)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}bank/cards?sortKey=createdAt&sortValue=desc`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': `${Cookies.get('token')}`
        }
    }).then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return res.json().then((errorData) => {
                throw new Error(errorData.message || 'An error occurred');
            });
        }
    })
    .then(data=>{
        setData(data.data)
    })
    .catch(err=>{
        console.log(err)
    })
}