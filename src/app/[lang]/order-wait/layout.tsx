import { metadataOrderWait } from "@/src/app/data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = metadataOrderWait

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
