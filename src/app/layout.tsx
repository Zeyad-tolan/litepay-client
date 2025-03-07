import type { Metadata } from "next";
import { metadataLocal } from "./data/metadata";
import "./styles/globals.css";

export const metadata: Metadata = metadataLocal

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  )
}
