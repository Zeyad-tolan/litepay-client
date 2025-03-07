/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction } from "react";

export const getAvatarTrans = (counterpartyName:string,setImage: Dispatch<SetStateAction<string>>) => {
    fetch(`https://api.brandfetch.io/v2/search/${counterpartyName.toString().toLowerCase().split(" ")[0]}`)
        .then(res => {
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
            const avatar = data.find(
                (brand:any) =>
                    brand.name?.toLowerCase() === counterpartyName.toLowerCase() ||
                    brand.name?.split('.')[0].toLowerCase() === counterpartyName.toLowerCase(),
            )?.icon;
            setImage(avatar || "null");
        })
        .catch(error => {
            console.error('Error fetching avatar:', error);
            return null;
        });
};