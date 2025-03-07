"use client"
import { BackArrowIcon } from "@/src/app/icons/icons";
import { motion } from "framer-motion";
import NumberInput from "../../../form/NumberInput";
import SubmitBtn from "../../../form/SubmitBtn";
import { FormPartOneProps } from "../FormPartOne/FormPartOne";
import { handelSubmitCartReqPartTwo } from "@/src/util/cartReqPartTwo";
import { useParams, useRouter } from "next/navigation";
import { sendOTP } from "@/src/util/sendOTP";
import { useEffect, useState } from "react";

export default function FormPartTwo({ setPart }: FormPartOneProps) {
  const router = useRouter()
  const { lang } = useParams()
  const [disable,setDisable] = useState<boolean>(true)

  const resend = ()=>{
    sendOTP(setPart)
    setDisable(true)
    setTimeout(() => {
      setDisable(false)
    }, 60*1000);
  }
  useEffect(()=>{
    setTimeout(() => {
      setDisable(false)
    }, 60*1000);
  },[setDisable])
  return (
    <>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={(e) => handelSubmitCartReqPartTwo(e,lang?.toString() as string,router)}
        className="w-full absolute py-5 px-8">
        <div
          onClick={() => setPart(1)}
          className="cursor-pointer text-black dark:!text-white mb-5"
        >
          <BackArrowIcon className={`text-black dark:!text-white ${lang === "en" ? "rotate-0" : "rotate-180"} `}/>
        </div>
        <NumberInput name="otp" required title="OTP" des="one-time-password" />
        <button disabled={disable} type="button" onClick={()=>resend()}
            className={`w-full underline text-gray-500 text-start  text-sm font-medium`}
          >
            {lang ==="en" ? "Resend OTP Code" : "إعادة إرسال رمز التحقق"}
        </button>
        <div className="mt-6">
          <SubmitBtn title="next" />
        </div>
      </motion.form>
    </>
  );
}
