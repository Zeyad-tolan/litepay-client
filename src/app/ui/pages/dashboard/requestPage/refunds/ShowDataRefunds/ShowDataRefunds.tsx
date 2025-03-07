import Pagination from "../../layout/Pagination";
import ShowDataRefundsBody from "../ShowDataRefundsBody";
import ShowDataRefundsHeader from "../ShowDataRefundsHeader";

export default function ShowDataRefunds() {
  return (
    <>
      <table className="w-full">
        <ShowDataRefundsHeader />
        <ShowDataRefundsBody />
      </table>
      <Pagination />
    </>
  );
}
