"use client"
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
// import TextInput from "@/src/app/ui/form/TextInput";
import { handelSubmitPartOneForgotPassword } from "@/src/util/forgotPassword";
import { Dispatch, SetStateAction } from "react";
import HeroForgotPassword from "../../HeroForgotPassword";
import { useTranslations } from "next-intl";

export type PartOneProps = {
  setParts: Dispatch<SetStateAction<1 | 2 | 3 | 4>>,
  setValueFirst?: Dispatch<SetStateAction<string>>
};
export default function PartOne({ setParts, setValueFirst }: PartOneProps) {
  const t = useTranslations("Auth");
  return (
    <form
      onSubmit={(e) => handelSubmitPartOneForgotPassword(e, setParts, setValueFirst)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-8">
      <HeroForgotPassword title="forgot-password" des="forgot-password-des" />
      <div className="w-full flex flex-col justify-center items-center gap-4">
        {/* <TextInput name="email-phone" required title="email-or-phone" /> */}
        <div
          className="flex flex-col gap-2 w-full"
        >
          <label htmlFor={"email"} className="flex md:flex-row flex-col gap-1">
            {t("email-phone")}
          </label>
          <input
            type="text"
            required
            name={"email"}
            id={"email"}
            className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent w-full"
          />
        </div>
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
