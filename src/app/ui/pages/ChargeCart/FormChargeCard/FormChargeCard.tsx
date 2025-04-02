/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getAllRating } from "@/src/util/getAllRating";
import { getExchangeRate } from "@/src/util/getExchangeRate";
import { handelSubmitChargeCard } from "@/src/util/handelChargeCard";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitBtn from "../../../form/SubmitBtn";
import DetailsChargeCart from "../DetailsChargeCart";
import InputDollarChargeCart from "../InputDollarChargeCart";
import InputPoundsChargeCart from "../InputPoundsChargeCart";
import PromoCode from "../PromoCode";
import TypeCharge from "../TypeCharge";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getCardPrice } from "@/src/util/getCardPrice";
import toast from "react-hot-toast";

export default function FormChargeCard() {
  const [typeCharge, setTypeCharge] = useState<"instapay" | "vodafone">(
    "instapay"
  );
  const [currencyDifference, setCurrencyDifference] = useState<number>(51);
  const [dollarValue, setDollarValue] = useState<number>(1);
  const [poundValue, setPoundValue] = useState<number>(51);
  const [focusInputName, setFocusInputName] = useState<"" | "pound" | "dollar">(
    ""
  );
  const [disabled, setDisabled] = useState<boolean>(true);
  const [promoCodeValue, setPromoCodeValue] = useState<string>("");
  const [instapayValue, setInstapayValue] = useState<number>(0);
  const [vodafoneCash, setVodafoneCash] = useState<number>(0);
  const [normalUser, setNormalUser] = useState<number>(0);
  const [vipUser, setVipUser] = useState<number>(0);
  const [priceCard, setCardPrice] = useState<number>(5);
  const router = useRouter();
  const { lang } = useParams();
  const { user }: any = jwtDecode(Cookies.get("token") as string);

  const instaFee = instapayValue;
  const vodafoneCashFee = vodafoneCash;
  const commission = user.Role
    ? user.Role.type === "user"
      ? normalUser
      : vipUser
    : normalUser;
  // console.log(commission);

  useEffect(() => {
    getExchangeRate(setCurrencyDifference);
    getAllRating(setInstapayValue, setVodafoneCash, setNormalUser, setVipUser);
    getCardPrice(setCardPrice);
    const dollar = sessionStorage.getItem("dollar-value");
    dollar && setDollarValue(+dollar);
    const pound = sessionStorage.getItem("pound-value");
    pound && setPoundValue(+pound);
  }, []);

  useEffect(() => {
    const baseValue = dollarValue * currencyDifference;
    const fees = baseValue * commission;
    const cardPrice = priceCard * currencyDifference;
    const additionalCharge =
      typeCharge === "vodafone"
        ? (baseValue + fees) * vodafoneCashFee
        : instaFee;

    if (focusInputName == "dollar") {
      setPoundValue(baseValue + fees + additionalCharge + cardPrice);
      sessionStorage.setItem(
        "pound-value",
        `${Math.ceil(baseValue + fees + additionalCharge + cardPrice)}`
      );
    }

    if (focusInputName == "pound") {
      setDollarValue(
        typeCharge === "vodafone"
          ? (poundValue - cardPrice) /
              (currencyDifference * (1 + commission + vodafoneCashFee))
          : (poundValue - cardPrice) /
              (currencyDifference * (1 + commission + instaFee))
      );
      sessionStorage.setItem(
        "dollar-value",
        `${Math.floor(
          typeCharge === "vodafone"
            ? (poundValue - cardPrice) /
                (currencyDifference * (1 + commission + vodafoneCashFee))
            : (poundValue - cardPrice) /
                (currencyDifference * (1 + commission + instaFee))
        )}`
      );
    }

    if (dollarValue >= 5 || poundValue >= 50000) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [dollarValue, poundValue, typeCharge, priceCard]);
  return (
    <form
      className="w-full flex flex-col gap-8"
      onSubmit={(e) => {
        toast.error("This feature is under maintenance");
        return;

        handelSubmitChargeCard(
          e,
          `${currencyDifference}`,
          promoCodeValue,
          typeCharge,
          lang?.toString() as string,
          router
        );
      }}
    >
      <div className="w-full flex flex-col gap-2">
        <InputDollarChargeCart
          dollarValue={dollarValue}
          setDollarValue={setDollarValue}
          setFocusInputName={setFocusInputName}
        />
        <DetailsChargeCart
          cardPrice={priceCard}
          commission={commission}
          instapay={instapayValue}
          vodafoneCash={vodafoneCash}
          chargeType={typeCharge}
          currencyDifference={currencyDifference}
        />
        <InputPoundsChargeCart
          poundValue={poundValue}
          setPoundValue={setPoundValue}
          setFocusInputName={setFocusInputName}
        />
        <PromoCode setValue={setPromoCodeValue} value={promoCodeValue} />
        <TypeCharge
          setFocusInputName={setFocusInputName}
          setValue={setTypeCharge}
          value={typeCharge}
        />
      </div>
      <SubmitBtn title="next" disabled={disabled} />
    </form>
  );
}
