"use client";

import Cookies from 'js-cookie';
import { useTranslations } from "next-intl";
import LinkLocal from "../../elements/LinkLocal";

export default function SignupAndLogin() {
  const t = useTranslations("Navbar")
  const login = Cookies.get('token')
  return (
    login == undefined ?
      <div className="hidden sm:flex justify-between items-center gap-3 font-medium">
        <LinkLocal src="login" style="text-primary">
          {t("login")}
        </LinkLocal>
        <LinkLocal src="signup" style="bg-primary text-secondary py-1 px-3 rounded-full">
          {t("signup")}
        </LinkLocal>
      </div> : null
  );
}
