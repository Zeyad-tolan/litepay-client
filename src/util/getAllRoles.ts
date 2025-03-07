import Cookies from 'js-cookie'
import { Dispatch, SetStateAction } from 'react';
import { getAllRolesType } from '../types/allRolesTypes';

export const getAllRoles = (setData:Dispatch<SetStateAction<getAllRolesType[] | null>>) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}roles`, {
        method: 'GET',
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
    }).then(data => {
        // console.log(data)
        setData(data.data)
    })
    .catch(err => console.log(err))
}