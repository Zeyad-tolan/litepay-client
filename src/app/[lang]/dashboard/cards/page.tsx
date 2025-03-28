import ShowDataCard from "@/src/app/ui/pages/dashboard/cardPage/ShowDataCard";
import FormUsersPage from "@/src/app/ui/pages/dashboard/usersPage/FormUsersPage";

export default function Cards() {
  return (
    <section className="container mx-auto px-4 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300">
      <FormUsersPage link="/cards/exportAllCardsAsExcel" fileName="cards" />
      <div className="w-full">
        <ShowDataCard />
      </div>
    </section>
  );
}
