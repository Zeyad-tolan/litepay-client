import Cookies from "js-cookie"
import { Dispatch, SetStateAction } from "react"
import { transHistoryType } from "../types"
import { ReadonlyURLSearchParams } from "next/navigation"
import { metaType } from "../types/allRequestsType"

export const getUserTrans = (setData: Dispatch<SetStateAction<transHistoryType[] | [] | null>>,search: ReadonlyURLSearchParams,setPaginationTrans: Dispatch<SetStateAction<metaType | null>>)=>{
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const today = `${year}-${`${month}`.length === 1 ? `0${month}` : `${month}`}-${`${day}`.length === 1 ? `0${day}` : `${day}`}`;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}transactions/mine?${search.toString()}&limitNo=10&endDate=${today}&sortKey=createdAt&sortValue=DESC`,{
        method:"GET",
        headers:{
            "token":`${Cookies.get('token')}`
        }
    })
    .then(res=>{
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
        // console.log(data)
        setData(data.data)
        setPaginationTrans(data.meta)
    })
    .catch(err=>{
        console.log(err)
    })
}