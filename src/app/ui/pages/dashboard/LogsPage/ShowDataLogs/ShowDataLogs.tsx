import { logsData } from "@/src/app/data/logsData";
import OneItemLogs from "../OneItemLogs";
import Pagination from "../../requestPage/layout/Pagination";

export default function ShowDataLogs() {
  return (
    <>
      {
        logsData.map((item, index) => {
          return <OneItemLogs item={item} check={index !== logsData.length - 1 ? true : false} key={index}/>
        })
      }
      <Pagination />
    </>
  );
}
