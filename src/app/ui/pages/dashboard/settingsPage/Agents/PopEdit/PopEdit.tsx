"use client"
import { BackArrowIcon } from "@/src/app/icons/icons";
import PopUpLayout from "@/src/app/ui/elements/PopUpLayout";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import FormPopEdit from "../FormPopEdit";

interface IProps {
  name: string;
  id: number;
  setShow: Dispatch<SetStateAction<boolean>>,
  show: boolean,
}
export default function PopEdit({id,name,setShow,show}: IProps) {
  const t = useTranslations("dashboard");
  const {lang} = useParams()
  console.log(id);
  return (
    <PopUpLayout setShow={setShow} show={show} styleChildren="p-5 px-8 !w-[900px] dark:bg-primaryDark" >
      <>
        <div className="flex text-lg items-center gap-1 cursor-pointer" onClick={() => setShow(false)}>
          <BackArrowIcon className={`!text-black dark:!text-white ${lang === "en" ? "rotate-0" : "rotate-180"}`} />
          <p>
            {t('back')}
          </p>
        </div>
        <div>
          <h1 className="text-3xl mt-3">{name}</h1>
          <div className="mt-5">
            <FormPopEdit />
          </div>
        </div>
      </>
    </PopUpLayout>
  );
}
