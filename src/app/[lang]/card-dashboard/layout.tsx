import type { Metadata } from "next";
import { metadataCardDashboard } from "../../data/metadata";

export const metadata: Metadata = metadataCardDashboard

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
