"use client"
// import Cookies from 'js-cookie';
import { redirect, useParams, useSearchParams } from 'next/navigation';
import HeroCardDashboard from "../HeroCardDashboard";
import ItemsTransHistory from "../ItemsTransHistory";
import TitleCardDashboard from "../TitleCardDashboard";
import { useEffect, useState } from 'react';
import { transHistoryType } from '@/src/types';
import { getDataTransactionCardDashBoard } from '@/src/util/getDataTransctionCardDashBoard';
import { getMyCardType } from '@/src/types/getMyCardType';
import { getMyCard } from '@/src/util/getMyCard';
// import { getUserTrans } from '@/src/util/getUserTrans';
import { changeRoleAuto } from '@/src/util/changeRoleAuto';
import { metaType } from '@/src/types/allRequestsType';

export default function MainComponent() {
  // const token = Cookies.get('token')
  const { lang } = useParams()
  const [dataCard, setDataCard] = useState<null | getMyCardType[]>(null)
  // const [dataTrans, setDataTrans] = useState<null | transHistoryType[]>(null)
  const [dataReqs, setDataReqs] = useState<null | transHistoryType[]>(null)
  const [paginationReqs, setPaginationReqs] = useState<metaType | null>(null)
  // const [paginationTrans, setPaginationTrans] = useState<metaType | null>(null)
  const search = useSearchParams()
  useEffect(() => {
    getDataTransactionCardDashBoard(setDataReqs,search,setPaginationReqs)
    // getUserTrans(setDataTrans,search,setPaginationTrans)
  }, [search])
  useEffect(() => {
    getMyCard(setDataCard)
    changeRoleAuto()
  }, [])
  // console.log(dataCard)
  // console.log(dataReqs)
  return (
    <>
      {
        dataCard && dataReqs && paginationReqs ?
          <>
            {
              dataCard.length > 0 && dataReqs ? 
                <>
                  <div className="min-h-screen w-full flex flex-col gap-8 md:px-0 px-4 py-12 md:min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white transition-all duration-300">
                    <div className="container mx-auto flex flex-col gap-12">
                      <TitleCardDashboard />
                      <HeroCardDashboard data={dataCard[0]}/>
                    </div>
                    <ItemsTransHistory data={[...dataReqs]} paginationReqs={paginationReqs}/>
                  </div>
                </>
              : dataCard.length === 0 && dataReqs.length > 0 ?
                redirect(`/${lang}/order-wait`)
              : dataCard.length === 0 && dataReqs.length === 0 ?
                redirect(`/${lang}/card-req`)
              : null
            }
          </>
        : null
      }
    </>
  );
}

/*
  dataCard && dataTrans ?
    dataCard.length > 0 && dataTrans.length > 0 ? 
      <></>
    : dataCard.length === 0 && dataTrans.length > 0 ?
      redirect(`/${lang}/order-wait`)
    : dataCard.length === 0 && dataTrans.length === 0 ?
      redirect(`/${lang}/card-req`)
  : null
*/