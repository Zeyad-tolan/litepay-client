import MainCardDetails from "@/src/app/ui/pages/dashboard/cardDetails/MainCardDetails";

export default function CardDetails() {
  return (
    <section className="container mx-auto flex flex-col gap-12 py-8 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300">
      <MainCardDetails />
    </section>
  );
}
