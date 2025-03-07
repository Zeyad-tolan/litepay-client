"use client"
// import { users } from "@/src/app/data/usersData";
import OneItemUsers from "../OneItemUsers";
import { getUsersItemType } from "@/src/types/allUsersType";

export default function ShowDataUserBody({data}:{data:getUsersItemType[]}) {
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <OneItemUsers item={item} key={index} />
        );
      })}
    </tbody>
  );
}
