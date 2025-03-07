
import Cookies from "js-cookie";
import { Dispatch, FormEvent, SetStateAction } from "react";
import toast from "react-hot-toast";

export const changeUserRate = (e:FormEvent<HTMLFormElement>,userId: string,setShow: Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rating = formData.get("rating")
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/rating/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": `${Cookies.get("token")}`,
        },
        body: JSON.stringify({
            "rating": +(rating as string)
        })
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
        .then(data => {
            // console.log(data)
            toast.success(data.message)
            setShow(false)
        })
        .catch(err => {
            // console.log(err)
            toast.error(err.message)
        })
}