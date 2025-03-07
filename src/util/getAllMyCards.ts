import Cookies from 'js-cookie';
import { Dispatch, SetStateAction } from 'react';
import { cardsIdDataType } from '../app/data/cardsIdData';

export const getAllMyCards = async (setCardId: Dispatch<SetStateAction<cardsIdDataType[] | null>>) => {
    try {
        const myHeaders = new Headers();
        const token = Cookies.get('token');
        // const id = Cookies.get('id');
        myHeaders.append("token", token ? token : "");

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cards/mine?sortKey=createdAt&sortValue=ASC`, {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        setCardId(JSON.parse(result).data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
};
