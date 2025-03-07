import srcImage from "@/src/shared/Flag_of_Egypt.png";
import { handleInput } from "@/src/util/handelInputNumbers";
import { useTranslations } from "next-intl";
import Image from "next/image";

export type PhoneNumberProps = {
  name: string,
  des?: string;
  value?: string
};

export default function PhoneNumber({ name, des, value }: PhoneNumberProps) {
  const t = useTranslations("Cards");

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="flex md:flex-row flex-col gap-1">
        {t("phone-number")}
        {des && (
          <span className="text-[#A2A3A2]">
            {t(des)}
          </span>
        )}
      </label>
      <div className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full flex gap-2">
        <p>+2</p>
        <input
          type="text"
          required
          name={name}
          id={name}
          defaultValue={value ? value : ""}
          minLength={11}
          maxLength={11}
          inputMode="numeric"
          className="outline-none bg-transparent flex-1"
          onInput={handleInput}
        />
        <Image
          alt="egypt"
          src={srcImage}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
