import { refunds } from "@/src/app/data/refundsData";
import OneItemRefunds from "../OneItemRefunds";

export default function ShowDataRefundsBody() {
  return (
    <tbody>
      {refunds.map((item, index) => {
        return (
          <OneItemRefunds item={item} key={index} />
        );
      })}
    </tbody>
  );
}
