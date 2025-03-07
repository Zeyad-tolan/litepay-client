"use client";

import HeaderUserDetails from "@/src/app/ui/pages/dashboard/userDetails/HeaderUserDetails";
import UserDetailsBody from "@/src/app/ui/pages/dashboard/userDetails/UserDetailsBody";
import { useParams } from "next/navigation";

export default function UsersDetails() {
  const { user } = useParams()

  return (
    <section className='container mx-auto px-4 py-8 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark flex flex-col gap-4 transition-all duration-300'>
      <HeaderUserDetails />
      <UserDetailsBody id={user as string} />
    </section>
  );
}
