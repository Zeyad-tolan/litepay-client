"use client";

import {
  CircleDashedCheckIcon,
  CopyIcon,
  EyeClosedIcon,
  EyeIcon,
} from "@/src/app/icons/icons";
import srcImage from "@/src/shared/card-dashboard-image.png";
import { tracking } from "@/src/util/tracking";
import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";

interface imageDetailsCardProps {
  name: string;
  id: string;
  dateExp: string;
  cvvNum: string;
  cardId: number;
}

export default function ImageDetailsCard({
  name,
  cvvNum,
  dateExp,
  id,
  cardId,
}: imageDetailsCardProps) {
  const groupedId = id.toString().match(/.{1,4}/g);
  const [copy, setCopy] = useState<boolean>(false);
  const [showCardId, setShowCardId] = useState<boolean>(false);
  const { lang } = useParams();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`${id}`)
      .then(() => {
        setCopy(true);
        tracking("card_number_copied", {
          cardId: cardId,
          userId: +(Cookies.get("id") as string),
        });
      })
      .catch(() => {
        setCopy(false);
      });
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="md:w-4/5 w-full col-span-1 h-fit text-white relative">
      <Image src={srcImage} alt="card" className="w-full" />
      <p className="absolute bottom-[5%] left-[10%] capitalize md:text-lg sm:text-base text-sm">
        {name}
      </p>
      <p className="absolute bottom-[20%] left-[45%] sm:text-base text-sm">
        {showCardId ? cvvNum : "***"}
      </p>
      <p className="absolute bottom-[20%] left-[20%] sm:text-base text-sm">
        {showCardId ? dateExp : "**/**"}
      </p>
      <p
        className={`absolute bottom-[33%] left-[10%] flex gap-2 md:text-lg sm:text-base text-sm ${
          lang === "ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {showCardId
          ? groupedId?.map((group, index) => <span key={index}>{group}</span>)
          : "**** **** **** ****"}
        {copy ? (
          <CircleDashedCheckIcon className="cursor-pointer" />
        ) : (
          <CopyIcon className="cursor-pointer" onClick={() => handleCopy()} />
        )}
        {showCardId ? (
          <EyeClosedIcon
            className="cursor-pointer"
            onClick={() => setShowCardId(false)}
          />
        ) : (
          <EyeIcon
            className="cursor-pointer"
            onClick={() => setShowCardId(true)}
          />
        )}
      </p>
    </div>
  );
}
