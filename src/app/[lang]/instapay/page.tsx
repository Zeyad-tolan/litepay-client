"use client"
import { redirect } from "next/navigation";
import BackArrowInstaPay from "../../ui/pages/instapay/BackArrowInstaPay";
import FormInstaPay from "../../ui/pages/instapay/FormInstaPay";
import HeroInstaPay from "../../ui/pages/instapay/HeroInstaPay";
import QrDetailsInstaPay from "../../ui/pages/instapay/QrDetailsInstaPay";
import Cookies from "js-cookie";

export default function Instapay() {
  const amountInst = Cookies.get("amountInst")
  // console.log(amountInst)
  return (
    amountInst ?
      <section className='dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300 min-h-screen flex justify-center py-12 md:px-0 px-8  w-full'>
        <div className="md:w-1/2 w-full relative flex flex-col gap-4 items-center">
          <BackArrowInstaPay />
          <HeroInstaPay />
          <QrDetailsInstaPay />
          <FormInstaPay />
        </div>
      </section>
    : redirect("/en")
  );
}