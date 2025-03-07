"use client"
import PasswordInput from "@/src/app/ui/form/PasswordInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { handelSubmitPartFourForgotPassword } from "@/src/util/forgotPassword";
import HeroForgotPassword from "../../HeroForgotPassword";
import { PartOneProps } from "../PartOne/PartOne";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PartFour({ }: PartOneProps) {
  const [errorValue, setErrorValue] = useState<string>("")
  const t = useTranslations("Auth")
  return (
    <form
      onSubmit={(e) => handelSubmitPartFourForgotPassword(e,setErrorValue)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-14">
      <HeroForgotPassword title="forgot-password-part-four" des="forgot-password-part-four-des" />
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <PasswordInput page="forgot-password" id="password" name="password" type="password" />
        <PasswordInput page="forgot-password" id="password-confirm" name="passwordConfirm" type="passwordConfirm" />
        <p className={`w-full text-red-500 text-start ${errorValue == "" ? "hidden" : ""}`}>
          {t(errorValue)}
        </p>
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
