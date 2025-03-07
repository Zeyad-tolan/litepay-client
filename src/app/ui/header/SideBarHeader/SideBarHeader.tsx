"use client";

import SideBarPhone from "@/src/app/components/SideBarPhone";
import { ThreeLinesIcon } from "@/src/app/icons/icons";
import { useState } from "react";

export default function SideBarHeader() {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      {
        show &&
        <div className="fixed top-0 left-0 w-screen h-screen bg-transparent" onClick={() => setShow(false)}></div>
      }
      <div
        className="block md:hidden relative"
        onClick={() => setShow(!show)}
      >

        <ThreeLinesIcon />
        <SideBarPhone open={show} />
      </div>
    </>
  );
}