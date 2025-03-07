"use client"
import { useTranslations } from "next-intl";
import ActionsUserDetails from "../ActionsUserDetails";
import Cards from "../Cards";
import IconUserDetails from "../IconUserDetails";
import SelectUserDetails from "../SelectUserDetails";
import OneItemUserDetails from "../OneItemUserDetails";
import { useEffect, useState } from "react";
import { getOneUser } from "@/src/util/getOneUser";
import { getUsersItemType } from "@/src/types/allUsersType";

export default function UserDetailsBody({ id: idLocale }: { id: string }) {
  const t = useTranslations('dashboard')
  const [dataUser,setData] = useState<getUsersItemType | null>(null)
  useEffect(() => {
    getOneUser(idLocale,setData)
  }, [idLocale])
  return (
    <>
    {
      dataUser &&
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IconUserDetails type={dataUser.Role.type} />
              <p className="text-2xl text-nowrap">
                {t('user-details')}
              </p>
              <SelectUserDetails id={dataUser.Role.id} />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-12">
              <OneItemUserDetails dataUser={dataUser} />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <ActionsUserDetails cards={dataUser.Cards} status={dataUser.status}/>
            {
              dataUser.Cards.length > 0 &&
              <Cards cards={dataUser.Cards} />
            }
          </div>
        </div>
    }
    </>
  );
}
