"use client";
import srcImage from "@/src/shared/logo_big.png";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Logo() {
  const { lang } = useParams()

  return (
    <Link href={"/" + lang}>
      <Image
        src={srcImage}
        alt="home"
        height={48}
        width={183}
      />
    </Link>
  );
}
