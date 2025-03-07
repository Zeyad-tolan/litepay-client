// import { RechargeCardData } from "@/src/app/data/RechargeCardData";
import OneItemRechargeCard from "../OneItemRechargeCard";
import { itemRequest } from "@/src/types/allRequestsType";

export default function BodyDataRechargeCard({data}:{data: itemRequest[]}) {
  return (
    <tbody>
      {data.map((item, index) => {
        return item.type === "recharge" && 
          <OneItemRechargeCard data={item} key={index} />
      })}
    </tbody>
  );
}
