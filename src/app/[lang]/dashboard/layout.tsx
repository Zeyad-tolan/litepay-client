import { metadataDashboard } from "@/src/app/data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = metadataDashboard

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen md:mt-[148px]">
      {/* <SideBarDashboard /> */}
      {children}
    </div>
  )
}
