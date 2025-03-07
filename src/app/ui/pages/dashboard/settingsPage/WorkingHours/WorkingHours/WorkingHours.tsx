"use client";
import { useState } from "react";
import TitleComponent from "../../TitleComponent";
import SelectDay from "../SelectDay";

export default function WorkingHours() {
  const [show,setShow] = useState<boolean>(true)
  return (
    <>
      <TitleComponent title="working-hours" setShow={setShow} show={show} />
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden transition-all duration-500`}>
        <SelectDay />
      </div>
    </>
  );
}
