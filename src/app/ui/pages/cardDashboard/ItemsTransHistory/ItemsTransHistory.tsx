"use client";

// import { transHistoryData } from "@/src/app/data/transHistoryData";
import { transHistoryType } from "@/src/types";
// import { getDataTransactionCardDashBoard } from "@/src/util/getDataTransctionCardDashBoard";
import { useTranslations } from "next-intl";
// import { useState } from "react";
import FilterDate from "../FilterDate";
import FilterType from "../FilterType";
import HeaderItemsTransHistory from "../HeaderItemsTransHistory";
import OneItemCard from "../OneItemCard";
import { metaType } from "@/src/types/allRequestsType";
import Pagination from "../../dashboard/requestPage/layout/Pagination";

interface IProps {
  data: transHistoryType[];
  paginationReqs: metaType;
}

export default function ItemsTransHistory({ data, paginationReqs }: IProps) {
  const t = useTranslations("Cards");
  const sortedDataDesc = data.sort(
    (a, b) =>
      new Date(b.bankCreatedAt || (b.createdAt as string)).getTime() -
      new Date(a.bankCreatedAt || (a.createdAt as string)).getTime()
  );

  return (
    <>
      <div className="container flex flex-col gap-6 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-medium">
                {t("transactions-history")}
              </p>
              <p className="text-xs">{t("transactions-history-des")}</p>
            </div>
            <div className="flex gap-1">
              <FilterType />
              <FilterDate />
            </div>
          </div>
          {data && data.length > 0 ? (
            <>
              <HeaderItemsTransHistory />
              <div className="flex flex-col gap-0">
                {sortedDataDesc?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col w-full gap-2">
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
            </>
          ) : (
            <p>{t("msg-not-used-card")}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination meta={paginationReqs} />
      </div>
    </>
  );
}
