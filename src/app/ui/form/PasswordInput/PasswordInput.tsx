"use client";
import { EyeClosedIcon, EyeIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { useState } from "react";

export type PasswordInputProps = {
  id: string
  name: string
  type: "password" | "passwordConfirm",
  page?: "forgot-password"
};
export default function PasswordInput({ id, name, type, page }: PasswordInputProps) {
  const t = useTranslations("Auth")
  const [focus, setFocus] = useState(false)
  const [showCardId, setShowCardId] = useState<boolean>(false)

  return (
    <div
      className={`flex flex-col gap-2 ${page == "forgot-password" ? "w-full" : "md:w-3/5 w-full"}`}
    >
      <label
        htmlFor={id}>
        {type == "password" ? t("password") : t("confirm-password")}
      </label>
      <div className={`border border-solid ${focus ? "border-primary" : "border-[#868685]"} py-2 px-3 rounded-full flex justify-between`}>
        <input
          type={showCardId ? "text" : "password"}
          name={name}
          id={id}
          required
          onClick={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={type == "password" ? t("password") : t("confirm-password")}
          className=" outline-none bg-transparent w-full"
        />
        {showCardId ? <EyeClosedIcon className="cursor-pointer" onClick={() => setShowCardId(false)} /> : <EyeIcon className="cursor-pointer" onClick={() => setShowCardId(true)} />}
      </div>

    </div>
  );
}
