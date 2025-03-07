"use client";

import { TransformationIcon } from "@/src/app/icons/icons";
import HeroSectionCalculator from "@/src/app/ui/pages/dashboard/calculator/HeroSectionCalculator";
import IntelValueCalculator from "@/src/app/ui/pages/dashboard/calculator/IntelValueCalculator";
import ValueRete from "@/src/app/ui/pages/dashboard/calculator/ValueRete";
import { getAllRating } from "@/src/util/getAllRating";
import { getExchangeRate } from "@/src/util/getExchangeRate";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [currencyDifference, setCurrencyDifference] = useState<number>(0)
  const [instaPayVodafoneCash, setInstaPayVodafoneCash] = useState<number>(0)
  const [exchangeRatePercent, setExchangeRatePercent] = useState<number>(0)
  const [dollarValue, setDollarValue] = useState<number>(0)
  const [poundValue, setPoundValue] = useState<number>(0)
  const [cardFee, setCardFee] = useState<number>(5)
  useEffect(() => {
    getExchangeRate(setCurrencyDifference)
    getAllRating(setInstaPayVodafoneCash, setInstaPayVodafoneCash, setExchangeRatePercent, setExchangeRatePercent)
  }, [])

  const handelCalculator = () => {
    const baseValue = dollarValue * currencyDifference;
    const fees = baseValue * exchangeRatePercent;
    const additionalCharge = (baseValue + fees) * instaPayVodafoneCash;
    const cardPrice = cardFee * currencyDifference
    setPoundValue(baseValue + fees + additionalCharge + cardPrice)
  }

  return (
    <section className='py-8 min-h-screen bg-secondaryDark dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
      <div className="container mx-auto flex flex-col justify-stretch gap-4">
        <HeroSectionCalculator />
        <IntelValueCalculator type="usd" value={dollarValue} changeValue={(e) => setDollarValue(+e.target.value)} />
        <ValueRete title="instaPay-vodafone-cash" value={instaPayVodafoneCash} changeValue={(e) => setInstaPayVodafoneCash(+e.target.value)} />
        <ValueRete title="card-fee" value={cardFee} changeValue={(e) => setCardFee(+e.target.value)} />
        <ValueRete title="exchange-rate" value={currencyDifference} changeValue={(e) => setCurrencyDifference(+e.target.value)} />
        <ValueRete title="exchange-rate-percent" value={exchangeRatePercent} changeValue={(e) => setExchangeRatePercent(+e.target.value)} />
        <div className="w-full flex justify-center py-6">
          <TransformationIcon className="hover:cursor-pointer" onClick={handelCalculator} />
        </div>
        <IntelValueCalculator type="egp" value={poundValue} changeValue={(e) => setPoundValue(+e.target.value)} />
      </div>
    </section>
  );
}