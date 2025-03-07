import srcImage from "@/src/shared/logo_short.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroForgotPasswordProps {
  title: string,
  des: string,
  emailOrPhone?: string,
}

export default function HeroForgotPassword({ title, des, emailOrPhone }: HeroForgotPasswordProps) {
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
        {t(title)}
      </p>
      <p className="font-normal text-sm text-center">
        {
          emailOrPhone ?
            t(des) + " " + emailOrPhone :
            t(des)
        }
      </p>
    </div>
  );
}
