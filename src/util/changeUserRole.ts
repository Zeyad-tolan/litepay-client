import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const changeUserRole = (id:string,role:string)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/change-role`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'token': `${Cookies.get('token')}`
        },
        body:JSON.stringify({
            roleId:role,
            userId:id
        })
    }).then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return res.json().then((errorData) => {
                throw new Error(errorData.message || 'An error occurred');
            });
        }
    }).then(data=>{
        // console.log(data)
        toast.success(data.message)
    }).catch(err=>{
        // console.log(err)
        toast.error(err.message)
    })
}