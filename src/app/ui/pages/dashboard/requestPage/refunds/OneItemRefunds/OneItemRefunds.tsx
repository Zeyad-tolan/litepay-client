"use client"
import Image, { StaticImageData } from "next/image";
import OneTdNewCardReq from "../../newCard/OneTdNewCardReq";
import { CheckIcon, WrongIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";

interface IProp{
  image: StaticImageData;
  name: string;
  cardNumber: string;
  amount: string;
  date: string;
  time: string;
}
export default function OneItemRefunds({item}:{item:IProp}) {
  const t = useTranslations('dashboard')
  return (
    <tr className="border-t">
          <td className={`font-normal py-1 flex justify-center`}>
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="!w-16 !h-14"
            />
          </td>
          <OneTdNewCardReq value={item.name} />
          <OneTdNewCardReq value={item.cardNumber} />
          <OneTdNewCardReq value={`${item.amount} EGP`} />
          <OneTdNewCardReq value={item.date} />
          <OneTdNewCardReq value={item.time} />
          <td>
            <div className="flex justify-center gap-2">
              <button className="flex items-center text-lg font-medium px-4 py-2 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
                <CheckIcon className="hover:cursor-pointer" /> {t('approve')}
              </button>
              <button className="flex items-center text-lg font-medium px-4 py-2 w-fit border border-[#B83131] rounded-full bg-[#FFEAEA] text-[#B83131] gap-2">
                <WrongIcon className="hover:cursor-pointer" /> {t('ignore')}
              </button>
            </div>
          </td>
    </tr>
  );
}
