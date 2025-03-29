// import { cardsData } from "@/src/app/data/cardsData";
import OneItemCard from "../OneItemCard";
import { getMyCardType } from "@/src/types/getMyCardType";

export default function ShowDataCardBody({ data }: { data: getMyCardType[] }) {
  return (
    <tbody>
      {data.map(({ cardNumber, createdAt, id, name, balance }, index) => {
        return (
          <OneItemCard
            cardNumber={cardNumber}
            createDate={createdAt}
            id={`${id}`}
            name={name}
            totalDeposits={`${balance}`}
            balance={balance}
            key={index}
          />
        );
      })}
    </tbody>
  );
}
