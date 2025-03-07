"use client";

import { BackArrowIcon } from "@/src/app/icons/icons";
import { useRouter } from "next/navigation";

export default function ArrowBack() {
  const route = useRouter();

  return (
    <div
      onClick={() => route.back()}
      className="absolute ltr:left-6 rtl:right-6 rtl:-scale-100 top-8 cursor-pointer" >
      <BackArrowIcon />
    </div>
  );
}
