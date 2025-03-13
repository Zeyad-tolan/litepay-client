"use client";

import { IconClearUser, IconDeleteUser } from "@/src/app/icons/icons";
import { blockUser } from "@/src/util/blockUser";
import { deleteUser } from "@/src/util/deleteUser";
import { deleteUserTransactions } from "@/src/util/deleteUserTransactions";
import { UnblockUser } from "@/src/util/UnblockUser";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function ActionsUserDetailsTwo({ status }: { status: string }) {
  const t = useTranslations("dashboard");
  const { user } = useParams();
  return (
    <div className="flex flex-col gap-5">
      {/* <button onClick={()=>deleteUserTransactions(user as string)} className="flex items-center text-lg font-medium px-4 w-fit border border-[#B83131] rounded-full bg-[#FFEAEA] text-[#B83131] gap-2">
        <IconClearUser /> {t('clear-user-transactions')}
      </button> */}
      <button
        onClick={() => deleteUser(user as string)}
        className="flex items-center text-lg font-medium px-4 w-fit border border-[#B83131] rounded-full bg-[#FFEAEA] text-[#B83131] gap-2"
      >
        <IconDeleteUser /> {t("delete-user")}
      </button>
      {status === "active" ? (
        <button
          onClick={() => blockUser(user as string)}
          className="flex items-center text-lg font-medium px-4 w-fit border border-[#B83131] rounded-full bg-[#FFEAEA] text-[#B83131] gap-2"
        >
          <IconDeleteUser /> {t("ban-user")}
        </button>
      ) : (
        <button
          onClick={() => UnblockUser(user as string)}
          className="flex items-center text-lg font-medium px-4 w-fit border border-[#B83131] rounded-full bg-[#FFEAEA] text-[#B83131] gap-2"
        >
          <IconDeleteUser /> {t("un-ban-user")}
        </button>
      )}
    </div>
  );
}
