"use client"
import LinkLocal from "@/src/app/ui/elements/LinkLocal";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export type OneActionUserDetailsProps = {
  icon:ReactNode;
  text:string;
  url:string;
};
export default function OneActionUserDetails(props: OneActionUserDetailsProps) {
  const t = useTranslations('dashboard')
  return (
    <LinkLocal src={`${props.url}`} style="flex items-center text-lg font-medium px-4 w-fit border border-[#165E3D] rounded-full bg-[#EDFFEA] text-[#165E3D] gap-2">
      {props.icon} {t(props.text)}
    </LinkLocal>
  );
}
