import toast from "react-hot-toast"
import Cookies from "js-cookie"

export const changeCardStatus = (id:string,status:string)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/change-status/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": `${Cookies.get("token")}`,
        },
        body: JSON.stringify({
            "status": status
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
        })
        .catch(err => {
            // console.log(err)
            toast.error(err.message)
        })
}