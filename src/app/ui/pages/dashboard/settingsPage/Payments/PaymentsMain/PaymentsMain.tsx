"use client"
import { useState } from "react";
import TitleComponent from "../../TitleComponent";
import FormPayments from "../FormPayments";

export default function PaymentsMain() {
  const [show,setShow] = useState<boolean>(true)
  return (
    <div className="border-t border-t-[#1A1B2380] dark:border-gray-500 pt-5">
      <TitleComponent title="payments" setShow={setShow} show={show}/>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
        <FormPayments />
      </div>
    </div>
  );
}
