"use client";
import HeaderAnalysis from "@/src/app/ui/pages/dashboard/analysis/HeaderAnalysis";

export default function Analysis() {
  return (
    <section className='col-span-9 min-h-screen bg-secondaryDark dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
      <HeaderAnalysis />
    </section>
  );
}