import { useTranslations } from "next-intl";
import Actions from "../Actions";
import OneItemCardDetails from "../OneItemCardDetails";

type HeaderCardDetailsProps = {
  user: string;
  phoneNumber: string;
  email: string;
  cardCreated: string;
  cardNumber: string;
  cardBalance: string;
  totalDeposits: string;
  last30Days: string;
  status: string;
  cvv: string;
  expiryDate: string;
};

export default function HeaderCardDetails({
  user,
  cvv,
  expiryDate,
  status,
  phoneNumber,
  email,
  cardCreated,
  cardNumber,
  cardBalance,
  totalDeposits,
  last30Days,
}: HeaderCardDetailsProps) {
  const t = useTranslations("dashboard");
  const date = new Date(cardCreated);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const HeaderCardDetailsData = [
    { title: "user", value: user },
    { title: "phone-number", value: phoneNumber },
    { title: "email", value: email },
    { title: "createDate", value: formattedDate },
    { title: "card-number", value: cardNumber },
    { title: "card-balance", value: cardBalance },
    { title: "total-deposits", value: totalDeposits },
    { title: "last-30-Days", value: last30Days },
  ];
  const dataAction = {
    cardNumber,
    cardBalance,
    cvv,
    expiryDate,
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl ">{t("card-details")}</h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-y-4 gap-x-2">
          {HeaderCardDetailsData.map(({ title, value }, index) => {
            return (
              <OneItemCardDetails title={title} value={value} key={index} />
            );
          })}
        </div>
      </div>
      <Actions data={dataAction} status={status} />
    </div>
  );
}
