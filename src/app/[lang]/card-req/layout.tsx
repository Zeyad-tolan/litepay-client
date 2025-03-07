import { metadataCartReq } from "@/src/app/data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = metadataCartReq

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
