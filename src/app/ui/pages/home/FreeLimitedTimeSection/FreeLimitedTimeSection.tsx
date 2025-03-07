"use client";

import srcImage from "@/src/shared/FreeLimitedTime.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Cookies from 'js-cookie'
import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function FreeLimitedTimeSection() {
  const { lang } = useParams()
  const t = useTranslations("Home")
  const token = Cookies.get("token")

  useEffect(()=>{
    sendGTMEvent({
      event: 'visit',
    });
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'visit');
    }
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track('visit');
    }
    // setTimeout(() => {
    //   if (typeof window !== "undefined" && window.clarity) {
    //     console.log("✅ Clarity يعمل!");
    //   } else {
    //     console.warn("❌ Clarity لم يتم تحميله بعد");
    //   }
    // }, 3000);
  },[])

  return (
    <section className="bg-white dark:bg-primaryDark text-black dark:text-white w-screen md:py-14 py-6 transition-all duration-150">
      <div className="container mx-auto sm:px-0 px-2 flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
        <div className="md:pt-6 flex flex-col items-center gap-8">
          <p className="font-semibold lg:text-4xl text-3xl">
            {t("title-one")}
          </p>
          <p className="md:w-2/3 w-full font-normal text-center lg:text-lg ">
            {t("desc-one")}
          </p>
          <Link
            href={token ? `/${lang}/card-dashboard` : `/${lang}/signup`}
            className="bg-primary text-secondary md:w-1/2 md:py-2 w-fit p-2 rounded-full text-center font-semibold"
          >
            {t("btn")}
          </Link>
        </div>
        <Image
          src={srcImage}
          alt="srcImage"
          className="md:w-2/5 w-10/12"
        />
      </div>
    </section>
  );
}