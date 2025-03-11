import HeaderUserDetails from "@/src/app/ui/pages/dashboard/userDetails/HeaderUserDetails";
import UserDetailsBody from "@/src/app/ui/pages/dashboard/userDetails/UserDetailsBody";
import React from "react";

export default async function page({ params }: { params: { userId: string } }) {
  const { userId } = await params;
  return (
    <section className=" container mx-auto px-4 py-8 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark flex flex-col gap-4 transition-all duration-300">
      <HeaderUserDetails />

      <UserDetailsBody id={userId as string} />
    </section>
  );
}
