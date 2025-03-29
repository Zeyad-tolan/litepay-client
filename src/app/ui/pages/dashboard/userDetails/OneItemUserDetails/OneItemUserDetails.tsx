import { getUsersItemType } from "@/src/types/allUsersType";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export type OneItemUserDetailsProps = {
  dataUser: getUsersItemType;
};
export default function OneItemUserDetails({
  dataUser,
}: OneItemUserDetailsProps) {
  const t = useTranslations("dashboard");
  const search = useSearchParams();
  const date = new Date(dataUser.createdAt);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  // console.log(dataUser.Cards);

  const totalDeposits = useMemo(() => {
    let total = 0;
    dataUser.Cards?.forEach((card) => {
      total += card.balance;
    });
    return total;
  }, [dataUser.Cards]);
  const detailsUserData = [
    {
      title: "name",
      value: `${
        dataUser.Cards.length > 0 ? `${dataUser.Cards[0].name}` : "null"
      }`,
    },
    { title: "phone-number", value: dataUser.phoneNumber || "null" },
    { title: "email", value: dataUser.email },
    { title: "registerDate", value: formattedDate },
    {
      title: "totalDeposits",
      value: `${Number(search.get("total")).toFixed(2)}` + " USD",
    },
    {
      title: "last",
      value: `${Number(search.get("last")).toFixed(2)}` || "null",
    },
  ];

  // console.log(dataUser.phoneNumber);

  return (
    <>
      {detailsUserData.map(({ title, value }, index) => {
        return (
          <div
            key={index}
            className={` flex flex-col gap-1 ${
              title == "email" ? "col-span-2" : "col-span-1"
            }`}
          >
            <p className="text-lg font-medium flex gap-1">
              {title === "telegram" && <span>{t("user")}</span>}
              {t(title)}
              {title === "last" && <span>{t("deposits")}</span>}
            </p>
            <p>{value === "null" ? "null" : value}</p>
          </div>
        );
      })}
    </>
  );
}
