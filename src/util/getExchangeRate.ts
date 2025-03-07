import { Dispatch, SetStateAction } from "react";

export const getExchangeRate = async (setCurrencyDifference: Dispatch<SetStateAction<number>>) => {
    // old api : https://v6.exchangerate-api.com/v6/e537844476ce337486899025/pair/USD/EGP
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/f34731d345f3e20a8391fd23/pair/USD/EGP`);
        if (!response.ok) {
            throw new Error('خطأ في جلب البيانات من API');
        }

        const data = await response.json();
        setCurrencyDifference(Number(data.conversion_rate.toFixed(2)))

    } catch (error) {
        console.error('حدث خطأ أثناء جلب سعر الصرف:', error);
    }
};
