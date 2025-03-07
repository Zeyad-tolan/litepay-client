"use client";
import { getAllRolesType } from "@/src/types/allRolesTypes";
import { changeUserRole } from "@/src/util/changeUserRole";
import { getAllRoles } from "@/src/util/getAllRoles";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectUserDetails({ id }: { id: number }) {
  const t = useTranslations("dashboard")
  const [data,setData] = useState<getAllRolesType[] | null>(null)
  const { user } = useParams()
  useEffect(() => {
    getAllRoles(setData)
  }, [])
  return (
    data &&
    <select onChange={(e) => changeUserRole(user as string,e.target.value)}
      defaultValue={id}
      className="outline-none bg-transparent w-fit border border-solid border-[#B3B7BE] rounded-md p-1">
      {
        data.map((item, index) => {
          return item.type === "vip" ?
            <option
              key={index}
              value={item.id}
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {item.type === "vip" ? t('premium') : t('normal')}
            </option>
            : item.type === "user" ?
            <option
              key={index}
              value={item.id}
              className="bg-white text-black dark:bg-primaryDark dark:text-white"
            >
              {item.type === "user" ? t('normal') : t('premium') }
            </option>
            :null
        })
      }
      {/* <option
        value="vip"
        className="bg-white text-black dark:bg-primaryDark dark:text-white"
      >
        {t('premium')}
      </option>
      <option
        value="user"
        className="bg-white text-black dark:bg-primaryDark dark:text-white"
      >
        {t('normal')}
      </option> */}
    </select>
  );
}
