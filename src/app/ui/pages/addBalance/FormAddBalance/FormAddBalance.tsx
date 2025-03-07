/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getAllRating } from "@/src/util/getAllRating";
import { getExchangeRate } from "@/src/util/getExchangeRate";
import { handelSubmitAddBalance } from "@/src/util/handelAddBalance";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitBtn from "../../../form/SubmitBtn";
import InputDollarChargeCart from "../../ChargeCart/InputDollarChargeCart";
import InputPoundsChargeCart from "../../ChargeCart/InputPoundsChargeCart";
import PromoCode from "../../ChargeCart/PromoCode";
import TypeCharge from "../../ChargeCart/TypeCharge";
import CardNumber from "../CardNumber";
import DetailsAddBalance from "../DetailsAddBalance";

export default function FormAddBalance() {
  const [typeCharge, setTypeCharge] = useState<"instapay" | "vodafone">("instapay")
  const [currencyDifference, setCurrencyDifference] = useState<number>(51)
  const [dollarValue, setDollarValue] = useState<number>(0)
  const [poundValue, setPoundValue] = useState<number>(0)
  const [focusInputName, setFocusInputName] = useState<"" | "pound" | "dollar">("")
  const [disabled, setDisabled] = useState<boolean>(true)
  const [promoCodeValue, setPromoCodeValue] = useState<string>("")
  const [instapayValue, setInstapayValue] = useState<number>(0)
  const [vodafoneCash, setVodafoneCash] = useState<number>(0)
  const [normalUser, setNormalUser] = useState<number>(0)
  const [vipUser, setVipUser] = useState<number>(0)
  const [save, setSave] = useState<number>(0)
  const { lang } = useParams()
  const router = useRouter()
  const { user }: any = jwtDecode(Cookies.get("token") as string);

  const instaFee = instapayValue
  const vodafoneCashFee = vodafoneCash
  const commission = user.rating ? +(user.rating)/100 :  user.Role ? user.Role.type === "user" ? normalUser : vipUser : normalUser

  useEffect(() => {
    getExchangeRate(setCurrencyDifference)
    getAllRating(setInstapayValue, setVodafoneCash, setNormalUser, setVipUser)
    const dollar = sessionStorage.getItem("dollar-value")
    dollar && setDollarValue(+dollar)
    const pound = sessionStorage.getItem("pound-value")
    pound && setPoundValue(+pound)
  }, [])

  useEffect(() => {
    const baseValue = dollarValue * currencyDifference;
    const fees = baseValue * commission;
    const additionalCharge = typeCharge === "vodafone" ? (baseValue + fees) * vodafoneCashFee : instaFee;

    if (focusInputName == "dollar") {
      setPoundValue(baseValue + fees + additionalCharge)
      sessionStorage.setItem("pound-value", `${Math.ceil(baseValue + fees + additionalCharge)}`)
      const vaule = (dollarValue * currencyDifference)
      const large = commission > normalUser ? commission : normalUser;
      const small = commission < normalUser ? commission : normalUser;
      setSave((vaule+(vaule * large))-(vaule+(vaule * small)))
    }

    if (focusInputName == "pound") {
      setDollarValue(
        typeCharge === "vodafone" ?
          (poundValue / (currencyDifference * (1 + commission + vodafoneCashFee))) :
          (poundValue / (currencyDifference * (1 + commission + instaFee)))
      );
      const vaule = (dollarValue * currencyDifference)
      const large = commission > normalUser ? commission : normalUser;
      const small = commission < normalUser ? commission : normalUser;
      setSave((vaule+(vaule * large))-(vaule+(vaule * small)))
      sessionStorage.setItem("dollar-value", `${Math.floor(
        typeCharge === "vodafone" ?
          (poundValue / (currencyDifference * (1 + commission + vodafoneCashFee))) :
          (poundValue / (currencyDifference * (1 + commission + instaFee)))
      )}`)
    }

    if (dollarValue >= 5 || poundValue >= 50000) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

  }, [dollarValue, poundValue, typeCharge])


  return (
    <form className="w-full flex flex-col gap-8" onSubmit={(e) => handelSubmitAddBalance(e, currencyDifference, promoCodeValue, typeCharge, lang as string, router)}>
      <CardNumber />
      <div className="w-full flex flex-col gap-2">
        <InputDollarChargeCart dollarValue={dollarValue} setDollarValue={setDollarValue} setFocusInputName={setFocusInputName} />
        <DetailsAddBalance role={user.Role.type} save={save} commission={commission} instapay={instapayValue} vodafoneCash={vodafoneCash} chargeType={typeCharge} currencyDifference={currencyDifference} />
        <InputPoundsChargeCart poundValue={poundValue} setPoundValue={setPoundValue} setFocusInputName={setFocusInputName} />
        <PromoCode setValue={setPromoCodeValue} value={promoCodeValue} />
        <TypeCharge setFocusInputName={setFocusInputName} setValue={setTypeCharge} value={typeCharge} />
      </div>
      <SubmitBtn title="next" disabled={disabled} />
    </form>
  );
}
