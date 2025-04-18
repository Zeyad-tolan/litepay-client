import FormRequestPage from "@/src/app/ui/pages/dashboard/requestPage/layout/FormRequestPage";
import ShowDataRefunds from "@/src/app/ui/pages/dashboard/requestPage/refunds/ShowDataRefunds";

export default function Refunds() {
  return (
    <section>
      <FormRequestPage
        link="/requests/exportAllRequestsAsExcel"
        fileName="requests"
      />
      <div className="w-full">
        <ShowDataRefunds />
      </div>
    </section>
  );
}
