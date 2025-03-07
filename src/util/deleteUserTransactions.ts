import Cookies from "js-cookie"
import toast from "react-hot-toast"

export const deleteUserTransactions = (id:string)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${id}/transactions/specific`, {
        method: "DELETE",
        headers: {
            "token": `${Cookies.get("token")}`,
        },
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