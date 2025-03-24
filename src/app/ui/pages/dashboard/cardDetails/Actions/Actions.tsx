import {
  EditIcon,
  FreezeIcon,
  IconAddBalance,
  IconDeleteUser,
} from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";
import PopEditBalance from "../PopEditBalance";
import { useState } from "react";
import { changeCardStatus } from "@/src/util/changeCardStatus";
import { useParams } from "next/navigation";
import { deleteCard } from "@/src/util/deleteCard";
import PopEditCard from "../PopEditCard";

interface IProp {
  data: {
    cardNumber: string;
    cardBalance: string;
    cvv: string;
    expiryDate: string;
  };
  userId: string;
  status: string;
}

export default function Actions({ status, data, userId }: IProp) {
  const { cardId } = useParams();
  const t = useTranslations("dashboard");
  const [showAddBalance, setShowAddBalance] = useState<boolean>(false);
  const [showEditCard, setShowEditCard] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">{t("actions")}</h1>
      <div className="flex gap-8">
        {status === "active" ? (
          <div
            onClick={() => changeCardStatus(cardId as string, "inactive")}
            className={`flex items-center gap-2 cursor-pointer px-6 py-2 border border-solid rounded-full border-[#B83131] text-[#B83131] bg-[#B83131]/20`}
          >
            <FreezeIcon />
            <p>{t("freeze-card")}</p>
          </div>
        ) : (
          <div
            onClick={() => changeCardStatus(cardId as string, "active")}
            className={`flex items-center gap-2 cursor-pointer px-6 py-2 border border-solid rounded-full border-[#B83131] text-[#B83131] bg-[#B83131]/20`}
          >
            <FreezeIcon />
            <p>{t("un-freeze-card")}</p>
          </div>
        )}
        <div
          onClick={() => deleteCard(cardId as string, true)}
          className={`flex items-center gap-2 cursor-pointer px-6 py-2 border border-solid rounded-full border-[#B83131] text-[#B83131] bg-[#B83131]/20`}
        >
          <IconDeleteUser />
          <p>{t("delete-card")}</p>
        </div>
        <div
          onClick={() => setShowAddBalance(true)}
          className={`flex items-center gap-2 cursor-pointer px-6 py-2 border border-solid rounded-full border-[#165E3D] text-[#165E3D] bg-[#165E3D]/20`}
        >
          <IconAddBalance />
          <p>{t("edit-balance")}</p>
        </div>
        <div
          onClick={() => setShowEditCard(true)}
          className={`flex items-center gap-2 cursor-pointer px-6 py-2 border border-solid rounded-full border-[#165E3D] text-[#165E3D] bg-[#165E3D]/20`}
        >
          <EditIcon />
          <p>{t("edit-card")}</p>
        </div>
      </div>
      <PopEditBalance
        cardBalance={data.cardBalance}
        setShow={setShowAddBalance}
        show={showAddBalance}
        userId={userId}
      />
      <PopEditCard data={data} setShow={setShowEditCard} show={showEditCard} />
    </div>
  );
}
