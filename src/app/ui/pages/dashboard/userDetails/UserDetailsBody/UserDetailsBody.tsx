"use client";
import { useTranslations } from "next-intl";
import ActionsUserDetails from "../ActionsUserDetails";
import Cards from "../Cards";
import IconUserDetails from "../IconUserDetails";
import SelectUserDetails from "../SelectUserDetails";
import OneItemUserDetails from "../OneItemUserDetails";
import { useEffect, useState } from "react";
import { getOneUser } from "@/src/util/getOneUser";
import { getUsersItemType } from "@/src/types/allUsersType";
import { usePathname } from "next/navigation";

const rules = {
  user: "normal",
  vip: "premium",
};

export default function UserDetailsBody({ id: idLocale }: { id: string }) {
  const currentPage = usePathname();
  const t = useTranslations("dashboard");
  const [dataUser, setData] = useState<getUsersItemType | null>(null);
  useEffect(() => {
    getOneUser(idLocale, setData);
  }, [idLocale]);
  return (
    <>
      {dataUser && (
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IconUserDetails type={dataUser.Role.type} />
              <p className="text-2xl text-nowrap">{t("user-details")}</p>
              {currentPage.includes("profile") ? (
                <span className="text-sm capitalize inline-flex border-2 rounded-md px-2 py-1">
                  {rules[dataUser.Role.type as keyof typeof rules]}
                </span>
              ) : (
                <SelectUserDetails id={dataUser.Role.id} />
              )}
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-12">
              <OneItemUserDetails dataUser={dataUser} />
            </div>
          </div>
          <div className="w-full flex justify-between">
            {currentPage.includes("dashboard") ? (
              <ActionsUserDetails
                cards={dataUser.Cards}
                status={dataUser.status}
              />
            ) : null}
            <Cards cards={dataUser.Cards} />
          </div>
        </div>
      )}
    </>
  );
}
