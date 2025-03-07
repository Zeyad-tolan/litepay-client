import toast from "react-hot-toast"
import Cookies from "js-cookie"

export const deleteCard = (id:string,back:boolean)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
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
        toast.success(data.message)
        if(!back){
            window.location.reload()
        }
        else{
            window.location.assign("/en/dashboard/cards")
        }
    })
    .catch(err=>{
        // console.log(err)
        toast.error(err.message)
    })
}