import FormRequestPage from "@/src/app/ui/pages/dashboard/requestPage/layout/FormRequestPage";
import ShowDataRecharge from "@/src/app/ui/pages/dashboard/requestPage/rechargeCard/ShowDataRecharge";

export default function RechargeCard() {
  return (
    <section>
      <FormRequestPage />
      <div className="w-full">
        <ShowDataRecharge />
      </div>
    </section>
  );
}