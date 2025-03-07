"use client";

import { cardsIdDataType } from "@/src/app/data/cardsIdData";
import { ArrowBottomIcon, CardIcon, EyeClosedIcon, EyeIcon } from "@/src/app/icons/icons";
import { getAllMyCards } from "@/src/util/getAllMyCards";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function CardNumber({ }) {
  const t = useTranslations("Cards")
  const [show, setShow] = useState<boolean>(false)
  const [cardId, setCardId] = useState<number>(0)
  const [data, setData] = useState<cardsIdDataType[] | null>(null)
  const [showCardId, setShowCardId] = useState<boolean>(false)
  const inputC = useRef<HTMLInputElement>(null)

  const handleCardSelection = (cardNumber: number, id: number) => {
    if (inputC.current) {
      inputC.current.value = `${id}`;
    }
    setCardId(cardNumber);
    setShow(false)
  }

  useEffect(() => {
    getAllMyCards(setData)
  }, [])

  useEffect(() => {
    if (data && inputC.current) {
      setCardId(data[0].cardNumber)
      inputC.current.value = `${data[0].id}`;
    }
  }, [data])

  return (
    <div>
      <p className="font-light">
        {t("card-add-balance")}
      </p>
      <div className={`flex flex-col justify-between ${show ? "gap-3" : "gap-0"} py-3 px-3 border border-solid border-[#868685] rounded-lg`}>
        <div className="flex items-center gap-3 w-full" >
          <div className="flex items-center gap-3 w-full" onClick={() => setShow(!show)}>
            <CardIcon className="fill-black dark:fill-white transition-all duration-300" />
            <p className="transition-all duration-300">
              {showCardId ? cardId.toString().match(/.{1,4}/g)?.join(" ") : ("**** **** **** ").concat(cardId.toString().slice(12))}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {showCardId ? <EyeClosedIcon className="cursor-pointer transition-all duration-300" onClick={() => setShowCardId(false)} /> : <EyeIcon className="cursor-pointer transition-all duration-300" onClick={() => setShowCardId(true)} />}
            <ArrowBottomIcon
              onClick={() => setShow(!show)}
              className={`cursor-pointer ${show ? "rotate-180" : ""} fill-black dark:fill-white transition-all duration-300`} />
          </div>
        </div>
        <div
          className={`${show ? "h-fit" : "h-0"} relative flex flex-col gap-1 overflow-hidden  transition-all duration-300`}>
          {
            data && data.map(({ cardNumber, id }, index) => {
              return (
                <p
                  key={index}
                  onClick={() => handleCardSelection(cardNumber, id)}
                  className="cursor-pointer bg-transparent">
                  {("**** **** **** ").concat(cardNumber.toString().slice(12))}
                </p>
              )
            })
          }
          <input ref={inputC}
            id=""
            type="number"
            name="cardId"
            className="hidden"
            // defaultValue={cardId}
          />
        </div>
      </div>
    </div>
  );
}
