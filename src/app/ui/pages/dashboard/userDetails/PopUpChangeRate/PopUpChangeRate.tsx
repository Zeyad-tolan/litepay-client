"use client"
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import NumberInput from "@/src/app/ui/form/NumberInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { changeUserRate } from "@/src/util/changeUserRate";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export type Props = {
  setShow: Dispatch<SetStateAction<boolean>>,
  show: boolean,
};

export default function PopUpChangeRate({ setShow, show }: Props) {
  const { user } = useParams()
  return (
    <PopUpLayout setShow={setShow} show={show} styleChildren="dark:bg-primaryDark">
      <form onSubmit={(e) => changeUserRate(e,user as string,setShow)} className="flex flex-col gap-2">
        <NumberInput name="rating" required title="add-rate" />
        <SubmitBtn title="submit" />
      </form>
    </PopUpLayout>
  );
}
