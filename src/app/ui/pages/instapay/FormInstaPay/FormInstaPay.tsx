"use client"
import { handelInstapay } from "@/src/util/handelInstapay";
import SubmitBtn from "../../../form/SubmitBtn";
import AmountInstaPay from "../AmountInstaPay";
import UploadImageInstaPay from "../UploadImageInstaPay";
import UserInstaPay from "../UserInstaPay";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function FormInstaPay() {
  const { lang } = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <form onSubmit={(e)=>{
      setLoading(true);
      handelInstapay(e,lang?.toString() as string,router)
    }} className="w-full flex flex-col gap-4">
      <div dir="ltr" className="flex md:flex-row flex-col gap-4 w-full">
        <UserInstaPay />
        <AmountInstaPay />
      </div>
      <UploadImageInstaPay setLoad={setLoading}/>
      <SubmitBtn title="confirm" disabled={loading}/>
    </form>
  );
}
