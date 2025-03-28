import FormRequestPage from "@/src/app/ui/pages/dashboard/requestPage/layout/FormRequestPage";
// import Pagination from "@/src/app/ui/pages/dashboard/requestPage/layout/Pagination";
import ShowData from "@/src/app/ui/pages/dashboard/requestPage/newCard/ShowData";
// import ShowDataBody from "@/src/app/ui/pages/dashboard/requestPage/newCard/ShowDataBody";
// import ShowDataHeader from "@/src/app/ui/pages/dashboard/requestPage/newCard/ShowDataHeader";

export default function NewCard() {
  return (
    <>
      <FormRequestPage
        link="/requests/exportAllRequestsAsExcel"
        fileName="requests"
      />
      <div className="w-full">
        <ShowData />
      </div>
    </>
  );
}
