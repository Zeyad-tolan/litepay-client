import srcImage from "@/src/shared/logo_short.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LinkLocal from "../../elements/LinkLocal";

export type HeroFormProps = {
  page: "login" | "signup"
};

export default function HeroForm({ page }: HeroFormProps) {
  const t = useTranslations("Auth")
  return (
    <div
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={srcImage}
        alt="Lite Pay"
        title="Lite Pay"
        className="w-12 h-12"
      />
      <p className="text-4xl font-medium text-center">
        {t(page == "login" ? "login-title" : "signup-title")}
      </p>
      <p className="flex gap-1 items-center font-medium">
        {t(page == "login" ? "dont-have" : "have-account")}
        <LinkLocal
          src={page == "login" ? "signup" : "login"}
          style="text-[#1727E5] underline"
        >
          {
            page == "login" ?
              t("sign-up") :
              t("login")
          }
        </LinkLocal>
      </p>
    </div>
  );
}
