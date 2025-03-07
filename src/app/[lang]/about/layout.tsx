import { metadataAboutUs } from "@/src/app/data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = metadataAboutUs

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
