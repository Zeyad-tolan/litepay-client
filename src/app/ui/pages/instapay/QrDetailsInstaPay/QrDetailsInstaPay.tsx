import srcImage from "@/src/shared/qr-instapay.jpeg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function QrDetailsInstaPay() {
  const t = useTranslations("Cards")
  const link = "https://ipn.eg/S/zeyadtolan/instapay/4HxTOj"
  const accountInstaPay = "zeyadtolan@instapay"

  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Image
        src={srcImage}
        alt="qr"
        className="w-52"
      />
      <div className="flex flex-col gap-1 items-center">
        <p>
          {t("Link")} : <Link href={link} target="_blank" className="text-blue-400 underline">{t("click-instaPay")}</Link>
        </p>
        <p>
          {t("user")} : {accountInstaPay}
        </p>
      </div>
    </div>
  );
}
