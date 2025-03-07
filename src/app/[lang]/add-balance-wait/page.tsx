import DescriptionAddBalanceWait from "../../ui/pages/addBalanceWait/DescriptionAddBalanceWait";
import TitleAddBalanceWait from "../../ui/pages/addBalanceWait/TitleAddBalanceWait";
import HeroOrderWait from "../../ui/pages/orderWait/HeroOrderWait";

export default function OrderWait() {
    return (
        <div className="mx-auto md:w-1/2 w-full md:px-0 px-4 md:min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white flex flex-col justify-center items-center gap-12 py-16 transition-all duration-300">
            <TitleAddBalanceWait />
            <HeroOrderWait />
            <DescriptionAddBalanceWait />
        </div>
    )
}
