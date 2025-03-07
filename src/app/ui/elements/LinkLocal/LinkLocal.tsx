"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export type LinkLocalProps = {
  src: string,
  children: ReactNode,
  style: string,
  title?: string
};
export default function LinkLocal({ src, children, style, title }: LinkLocalProps) {
  const { lang } = useParams()
  return (
    <Link
      href={"/" + lang + "/" + src}
      className={style}
      title={title}
    >
      {children}
    </Link>
  );
}
