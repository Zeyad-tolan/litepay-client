import Cookies from "js-cookie"

export const changeRoleAuto = ()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/change-role-auto`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'token': `${Cookies.get('token')}`
        },
        body:JSON.stringify({
            userId: +(Cookies.get('id') as string)
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
}