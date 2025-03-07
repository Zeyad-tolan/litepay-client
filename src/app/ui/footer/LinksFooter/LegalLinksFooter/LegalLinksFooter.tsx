"use client";

import { footerLinks } from "@/src/app/data/footerLinks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LegalLinksFooter() {
  const t = useTranslations("Footer")
  const { lang } = useParams()
  return (
    <div className="flex flex-col gap-4 col-span-2">
      <p className="font-semibold text-primary">
        {t("legal")}
      </p>
      <div className="flex sm:flex-col flex-row gap-2">
        {
          footerLinks.legal.map(({ link, title }, index) => {
            return (
              <Link
                className="text-white font-medium"
                href={"/" + lang + link} key={index}>
                {t(title)}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}
