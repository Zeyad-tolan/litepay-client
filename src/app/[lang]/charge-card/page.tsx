import { ChargeCardIcon } from "../../icons/icons";
import FormChargeCard from "../../ui/pages/ChargeCart/FormChargeCard";
import HeroChargeCard from "../../ui/pages/ChargeCart/HeroChargeCard";

export default function ChargeCard() {
    return (
        <div className="min-h-screen flex items-center dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300 py-8">
            <div className="container mx-auto px-0 sm:px-4 flex items-end justify-between gap-2">
                <div className="md:w-1/2 w-full flex flex-col gap-4 items-center px-12">
                    <HeroChargeCard />
                    <FormChargeCard />
                </div>
                <ChargeCardIcon className="md:block hidden" />
            </div>
        </div>
    )
}
