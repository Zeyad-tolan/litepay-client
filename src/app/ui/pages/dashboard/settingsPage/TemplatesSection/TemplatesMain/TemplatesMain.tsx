"use client";
import { useState } from "react";
import FormPopAgentsATemplate from "../../FormPopAgentsATemplate";
import TitleComponent from "../../TitleComponent";

export default function TemplatesMain() {
  const [show,setShow] = useState<boolean>(true)
  return (
    <div className="border-t border-t-[#1A1B2380] dark:border-gray-500 pt-5">
      <TitleComponent title="templates" setShow={setShow} show={show}/>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
        <FormPopAgentsATemplate />
      </div>
    </div>
  );
}
