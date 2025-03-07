import "@/src/app/styles/globals.css";
import { ChargeCardIcon } from "../../icons/icons";
import FormAddBalance from "../../ui/pages/addBalance/FormAddBalance";
import HeroAddBalance from "../../ui/pages/addBalance/HeroAddBalance";

export default function AddBalance() {
  return (
    <section className="min-h-screen flex sm:items-center dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300 py-8">
      <div className="container mx-auto px-0 sm:px-4 flex sm:items-end justify-between gap-2">
        <div className="md:w-1/2 w-full flex flex-col gap-4 items-center px-12">
          <HeroAddBalance />
          <FormAddBalance />
        </div>
        <ChargeCardIcon className="md:block hidden" />
      </div>
    </section>
  );
}