import toast from "react-hot-toast"
import Cookies from 'js-cookie';
import { Dispatch, SetStateAction } from "react";

export const sendOTP = (setPart: Dispatch<SetStateAction<number>>)=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/otp`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: `+2${window.sessionStorage.getItem('phone-card-req')}`,
            whay:"whatsapp"
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
    })
    .then(data => {
        // console.log(data)
        if(data.otpToken){
            Cookies.set('otpToken', data.otpToken)
            setPart(2)
            toast.success("OTP has been sent to your whatsapp")
        }
        else{
            toast.error("Something went wrong")
        }
    })
    .catch(err => {
        // console.log(err)
        toast.error(err.message)
    })
}