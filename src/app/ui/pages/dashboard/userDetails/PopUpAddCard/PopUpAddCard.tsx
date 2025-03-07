import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import NumberInput from "@/src/app/ui/form/NumberInput";
import SelectInput from "@/src/app/ui/form/SelectInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { PopUpAddBalanceProps } from "../PopUpAddBalance/PopUpAddBalance";

export default function PopUpAddCard({ setShow, show }: PopUpAddBalanceProps) {
  const data = [
    {
      value: "one",
      text: "value-one-add-card"
    },
    {
      value: "two",
      text: "value-two-add-card"
    },
  ]
  return (
    <PopUpLayout setShow={setShow} show={show} styleChildren="dark:bg-primaryDark">
      <form className="flex flex-col gap-2">
        <SelectInput data={data} name="mercury-card" required title="title-add-card-select" />
        <NumberInput name="card-number" required title="card-number" />
        <NumberInput name="cvv" required title="cvv" />
        <SubmitBtn title="submit" />
      </form>
    </PopUpLayout>
  );
}
