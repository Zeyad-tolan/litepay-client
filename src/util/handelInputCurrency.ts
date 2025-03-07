
export const handleInputCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (+value > 0) {
        event.target.value = value.replace(/[^0-9]/g, "");
    }
};