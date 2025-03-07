"use client";
import { useState } from "react";
import TitleComponent from "../../TitleComponent";
import AgentsData from "../AgentsData";

export default function AgentsMain() {
  const [show,setShow] = useState<boolean>(true)
  return (
    <div className="border-t border-t-[#1A1B2380] dark:border-gray-500 py-5">
      <TitleComponent title="agents" setShow={setShow} show={show}/>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-300`}>
        <AgentsData />
      </div>
    </div>
  );
}
