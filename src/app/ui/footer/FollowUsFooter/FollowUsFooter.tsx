import { followUsData } from "@/src/app/data/followUsData";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FollowUsFooter() {
  const t = useTranslations("Footer")
  return (
    <div className="flex justify-between sm:w-auto w-full">
      <p className="text-primary font-medium sm:hidden block">
        {t("follow")}
      </p>
      <div className="flex md:gap-12 gap-4">
        {
          followUsData.map(({ Icon, title, url }, index) => {
            return (
              <Link
                href={url}
                key={index}
                title={title}
                className="bg-primary w-7 h-7 p-1 rounded-full "
              >
                <Icon className="w-full h-full fill-primaryDark" />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}
