import { RadioActiveIcon, RadioInactiveIcon, VodafoneCashIcon } from "@/src/app/icons/icons";
import srcImage from "@/src/shared/insta-pay-image.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export type TypeChargeProps = {
  setValue: Dispatch<SetStateAction<"instapay" | "vodafone">>
  value: "instapay" | "vodafone",
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>,
};

export default function TypeCharge({ value, setValue, setFocusInputName }: TypeChargeProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => { setValue("instapay"); setFocusInputName("dollar") }}>
        {value == "instapay" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex-1 flex justify-center">
          <Image
            src={srcImage}
            alt="insta-pay"
            className="h-20 w-fit"
          />
        </div>
      </div>
      <div className="flex justify-between items-center cursor-not-allowed opacity-50"
      // onClick={() => { setValue("vodafone"); setFocusInputName("dollar") }}
      >
        {value == "vodafone" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex-1 flex justify-center">
          <VodafoneCashIcon />
        </div>
      </div>
    </div>
  );
}
