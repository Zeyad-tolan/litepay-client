"use client"
import { FormEvent, useState } from "react";
import SaveChangeButton from "../../SaveChangeButton";
import TitleComponent from "../../TitleComponent";
import UndoChangeButton from "../../UndoChangeButton";
import RateComponent from "../RateComponent";

export default function ExchangeMain() {
  const [show,setShow] = useState<boolean>(true)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <div className="border-t border-t-[#1A1B2380] dark:border-gray-500 pt-5">
      <TitleComponent title="exchange-commission" setShow={setShow} show={show}/>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <RateComponent title="basic-rate" value="8" />
            <RateComponent title="vodafone-cash" value="1" />
            <RateComponent title="premium-rate" value="6" />
            <RateComponent title="instapay" value="10" />
          </div>
          <div className="flex gap-5 justify-center items-center my-8">
            <UndoChangeButton />
            <SaveChangeButton />
          </div>
        </form>
      </div>
    </div>
  );
}
