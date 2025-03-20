import {
  RadioActiveIcon,
  RadioInactiveIcon,
  VodafoneCashIcon,
} from "@/src/app/icons/icons";
import srcImage from "@/src/shared/insta-pay-image.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export type TypeChargeProps = {
  setValue: Dispatch<SetStateAction<"instapay" | "vodafone">>;
  value: "instapay" | "vodafone";
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>;
};

export default function TypeCharge({
  value,
  setValue,
  setFocusInputName,
}: TypeChargeProps) {
  const t = useTranslations("Cards");
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={() => {
          setValue("instapay");
          setFocusInputName("dollar");
        }}
      >
        {value == "instapay" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex flex-1 justify-center">
          <Image src={srcImage} alt="insta-pay" className="h-20 w-fit" />
        </div>
      </div>
      <div
        className="flex justify-between cursor-not-allowed items-center opacity-50"
        onClick={() => {
          toast.error(t("vodafone-unavailable"));
        }}
      >
        {value == "vodafone" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex flex-1 justify-center">
          <VodafoneCashIcon />
        </div>
      </div>
    </div>
  );
}
