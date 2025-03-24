"use client";

import {
  IconAddBalance,
  IconAddCard,
  IconChangeRate,
  IconRefund,
  EditIcon,
} from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import PopUpAddBalance from "../PopUpAddBalance";
import PopUpAddCard from "../PopUpAddCard";
import PopUpChangeRate from "../PopUpChangeRate";
import { cards } from "@/src/types/allUsersType";
import PopAddCard from "../../requestPage/newCard/PopAddCard";
import PopUpEditUser from "../PopUpEditUser";

export default function ActionsUserDetailsOne({
  cards,
}: {
  cards: [] | cards[];
}) {
  const t = useTranslations("dashboard");
  const { lang } = useParams();
  const { user } = useParams();
  const [showAddBalance, setShowAddBalance] = useState<boolean>(false);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [showChangeRate, setShowChangeRate] = useState<boolean>(false);
  const [showEditUser, setShowEditUser] = useState<boolean>(false);
  return (
    <>
      <div
        className={`flex flex-col gap-4 ${
          lang === "en"
            ? "pr-16 border-r border-r-gray-500"
            : "pl-16 border-l border-l-gray-500"
        } `}
      >
        {/* <div onClick={() => setShowAddBalance(true)} className={`flex flex-col gap-5 w-fit cursor-pointer`}>
          <div className="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
            <IconAddBalance /> {t("add-balance")}
          </div>
        </div> */}
        <div
          onClick={() => setShowAddCard(true)}
          className={`flex flex-col gap-5 w-fit cursor-pointer`}
        >
          <div className="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
            <IconAddCard /> {t("add-card")}
          </div>
        </div>
        <div
          onClick={() => setShowEditUser(true)}
          className={`flex flex-col gap-5 w-fit cursor-pointer`}
        >
          <div className="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
            <EditIcon /> {t("edit-user")}
          </div>
        </div>
        {/* <div
          onClick={() => setShowAddBalance(true)}
          className={`flex flex-col gap-5 w-fit cursor-pointer`}
        >
          <div className="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
            <IconRefund /> {t("refund")}
          </div>
        </div> */}
        <div
          onClick={() => setShowChangeRate(true)}
          className={`flex flex-col gap-5 w-fit cursor-pointer`}
        >
          <div className="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
            <IconChangeRate /> {t("change-rate")}
          </div>
        </div>
      </div>
      <PopUpAddBalance
        cards={cards}
        setShow={setShowAddBalance}
        show={showAddBalance}
      />
      {showAddCard && (
        <PopAddCard
          userId={Number(user)}
          balance={`0`}
          id={`0`}
          setShow={setShowAddCard}
          show={showAddCard}
          type="under-development"
        />
      )}
      <PopUpChangeRate setShow={setShowChangeRate} show={showChangeRate} />
      <PopUpEditUser setShow={setShowEditUser} show={showEditUser} />
    </>
  );
}
