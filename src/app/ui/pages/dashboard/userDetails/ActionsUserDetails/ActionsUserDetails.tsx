import { useTranslations } from "next-intl";
import ActionsUserDetailsOne from "../ActionsUserDetailsOne";
import ActionsUserDetailsTwo from "../ActionsUserDetailsTwo";
import { cards } from "@/src/types/allUsersType";

interface IProp {
  cards:[] | cards[],
  status:string
}

export default function ActionsUserDetails({status,cards}:IProp) {
  const t = useTranslations('dashboard')

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium">{t("actions")}</h1>
      <div className="grid grid-cols-2 gap-4 text-nowrap">
        <ActionsUserDetailsOne cards={cards}/>
        <ActionsUserDetailsTwo status={status}/>
      </div>
    </div>
  );
}
