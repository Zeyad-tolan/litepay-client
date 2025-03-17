"use client";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { sideBarPhoneLinks } from "../../data/sideBarPhoneLinks";
import LinkLocal from "../../ui/elements/LinkLocal";
import LogOutButton from "../../ui/header/LogOutButton";

export default function SideBarPhone({ open }: { open: boolean }) {
  const t = useTranslations("Navbar");
  const login = Cookies.get("token");
  return (
    <div
      className={`bg-secondary py-8 px-4 w-40 h-fit absolute rtl:left-0 ltr:right-0 ${
        open ? "block" : "hidden"
      } top-10 transition-all duration-300 flex flex-col gap-4 rounded-lg overflow-hidden`}
    >
      <div className="flex flex-col gap-2">
        {sideBarPhoneLinks
          .filter(({ title }) => login || title !== "profile")
          .map(({ Icon, link, title }, index) => {
            return (
              <LinkLocal
                key={index}
                src={link}
                style="flex items-center gap-2 text-white"
              >
                <Icon />
                <p>{t(title)}</p>
              </LinkLocal>
            );
          })}
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <LinkLocal
          src="login"
          style={`${
            login ? "hidden" : "flex"
          } w-full border border-solid  border-primary rounded-full justify-center items-center py-2 text-primary`}
        >
          <p>{t("login")}</p>
        </LinkLocal>
        <LinkLocal
          src="signup"
          style={`${
            login ? "hidden" : "flex"
          } w-full border border-solid border-primary rounded-full justify-center items-center py-2 text-white bg-primary`}
        >
          <p>{t("signup")}</p>
        </LinkLocal>
        <LogOutButton />
      </div>
    </div>
  );
}
