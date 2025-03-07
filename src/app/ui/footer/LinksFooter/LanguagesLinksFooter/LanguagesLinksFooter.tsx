"use client"
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function LanguagesLinksFooter() {
  const t = useTranslations("Footer")
  const url = usePathname()

  const changeLang= (lang:string)=>{
    if(lang === "ar"){
      window.location.href = url.replace("/en","/ar")
    }else{
      window.location.href = url.replace("/ar","/en")
    }
  }
  return (
    <div className="flex flex-col gap-4 col-span-1">
      <p className="font-semibold text-primary ">
        {t("languages")}
      </p>
      <div className="flex flex-col gap-2">
        <button onClick={()=>changeLang("ar")}
          className="text-white font-arabic"
        >
          عربي
        </button>
        <button onClick={()=>changeLang("en")}
          className="text-white font-english"
        >
          English
        </button>
      </div>
    </div>
  );
}
