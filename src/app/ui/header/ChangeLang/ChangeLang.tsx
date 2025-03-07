"use client";

import { WorldIcon } from "@/src/app/icons/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChangeLang() {
  const url = usePathname()
  const [newLink, setNewLink] = useState("")

  useEffect(() => {
    if (url.startsWith("/en")) {
      const updatedUrl = url.replace("/en", "/ar");
      setNewLink(updatedUrl);
    } else {
      const updatedUrl = url.replace("/ar", "/en");
      setNewLink(updatedUrl);
    }
  }, [url])

  return (
    <Link
      href={newLink}
    >
      <WorldIcon />
    </Link>
  );
}
