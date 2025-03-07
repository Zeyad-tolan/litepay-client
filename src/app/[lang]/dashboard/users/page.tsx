import FormUsersPage from "@/src/app/ui/pages/dashboard/usersPage/FormUsersPage";
import ShowDataUsers from "@/src/app/ui/pages/dashboard/usersPage/ShowDataUsers";

export default function Users() {
  return (
    <section className='container mx-auto px-4 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
      <FormUsersPage />
      <div className="w-full">
        <ShowDataUsers />
      </div>
    </section>
  );
}