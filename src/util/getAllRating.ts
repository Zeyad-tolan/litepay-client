import Cookies from 'js-cookie';
import { Dispatch, SetStateAction } from 'react';
import { itemRating } from '../types';

export const getAllRating = async (setInsta: Dispatch<SetStateAction<number>>, setVodafoneCash: Dispatch<SetStateAction<number>>, setNormalUser: Dispatch<SetStateAction<number>>, setVipUser: Dispatch<SetStateAction<number>>) => {
    try {
        const myHeaders = new Headers();
        const token = Cookies.get('token');
        myHeaders.append("token", token ? token : "");

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}ratings?&sortKey=createdAt&sortValue=DESC`, {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        });

        const result = await response.text();
        // console.log(result)
        const data: itemRating[] = JSON.parse(result).data;
        data.map((item) => {
            if (item.title === "instapay") {
                setInsta(item.value / 100);
            } else if (item.title === "vodafone") {
                setVodafoneCash(item.value / 100);
            } else if (item.title === "norm") {
                setNormalUser(item.value / 100);
            } else if (item.title === "vip") {
                setVipUser(item.value / 100);
            }
        });
        // setInsta(data[0].value / 100)
        // setVodafoneCash(data[1].value / 100)
        // setVipUser(data[2].value / 100)
        // setNormalUser(data[3].value / 100)

    } catch (error) {
        console.error("Error fetching ratings:", error);
    }
};
