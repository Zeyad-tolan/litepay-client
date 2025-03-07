import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const blockUser = (userId: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/block/${userId}`, {
        method: "PUT",
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