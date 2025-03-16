import { transHistoryType } from "@/src/types";
import { useTranslations } from "next-intl";
import HeaderItemsTransHistory from "../../../cardDashboard/HeaderItemsTransHistory";
import OneItemCard from "../../../cardDashboard/OneItemCard";
import { metaType } from "@/src/types/allRequestsType";
import Pagination from "../../requestPage/layout/Pagination";

export type CardTransactionsProps = {
  data: transHistoryType[];
  paginationReqs: metaType;
  paginationTrans: metaType;
};
export default function CardTransactions({
  data,
  paginationReqs,
  paginationTrans,
}: CardTransactionsProps) {
  const t = useTranslations("dashboard");
  data = data.sort(
    (a, b) =>
      new Date(b.bankCreatedAt || (b.createdAt as string)).getTime() -
      new Date(a.bankCreatedAt || (a.createdAt as string)).getTime()
  );
  console.log(data);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{t("card-transactions")}</h1>
        <div className="flex flex-col gap-1">
          <HeaderItemsTransHistory />
          <div className="flex flex-col gap-0">
            {data.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col gap-0">
                  <OneItemCard
                    amount={item.amount}
                    companyName={item.companyName}
                    details={item.details}
                    failureReason={item.failureReason}
                    avatar={item.avatar}
                    id={item.id}
                    type={item.type}
                    method={item.method}
                    amountUsd={item.amountUsd}
                    createdAt={
                      item.method === "instapay"
                        ? item.createdAt
                        : item.bankCreatedAt
                    }
                    status={item.status}
                  />
                  {index != data.length - 1 && <hr />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {paginationReqs.totalPages > paginationTrans.totalPages ? (
          <Pagination meta={paginationReqs} />
        ) : (
          <Pagination meta={paginationTrans} />
        )}
      </div>
    </>
  );
}
