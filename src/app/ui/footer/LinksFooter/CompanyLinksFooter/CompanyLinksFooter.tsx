"use client";

import { footerLinks } from "@/src/app/data/footerLinks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CompanyLinksFooter() {
  const t = useTranslations("Footer")
  const { lang } = useParams()
  return (
    <div className="flex flex-col gap-4 col-span-1">
      <p className="font-semibold text-primary">
        {t("company")}
      </p>
      <div className="flex flex-col gap-2">
        {
          footerLinks.company.map(({ link, title }, index) => {
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
