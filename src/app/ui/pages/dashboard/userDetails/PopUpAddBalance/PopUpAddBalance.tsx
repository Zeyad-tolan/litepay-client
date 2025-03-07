"use client"
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import NumberInput from "@/src/app/ui/form/NumberInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { cards } from "@/src/types/allUsersType";
// import { getMyCardType } from "@/src/types/getMyCardType";
// import { getUserCards } from "@/src/util/getUserCards";
import { updateCard } from "@/src/util/updateCard";
import { useTranslations } from "next-intl";
// import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export type PopUpAddBalanceProps = {
  setShow: Dispatch<SetStateAction<boolean>>,
  show: boolean,
  cards?:[] | cards[]
};
export default function PopUpAddBalance({ setShow, show,cards }: PopUpAddBalanceProps) {
  const t = useTranslations("dashboard");
  // const [cards,setCards] = useState<getMyCardType[] | [] | null>(null)
  const handSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    // console.log(data)
    const id = data.cardId
    const all = {"balance":+(data.cardBalance as string)}
    updateCard(id as string,all,setShow)
  }
  // const { user } = useParams()
  // useEffect(()=>{
  //   getUserCards(user as string,setCards)
  // },[user])
  return (
    <PopUpLayout setShow={setShow} show={show} styleChildren="dark:bg-primaryDark">
      <form onSubmit={handSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="cardNumber" className="block mb-1">{t("card-number")}</label>
          <select name="cardId" id="cardNumber" className="w-full bg-transparent border border-gray-400 rounded-full outline-none p-2">
            {cards && cards.length > 0 && cards.map((card,i)=><option value={card.id} key={i}>{`****-${card.cardNumber.slice(-4)}`}</option>)}
          </select>
        </div>
        <NumberInput name="cardBalance" required title="new-balance" />
        <SubmitBtn title="submit" />
      </form>
    </PopUpLayout>
  );
}
