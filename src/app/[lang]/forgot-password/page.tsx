import ArrowBack from "../../ui/pages/ForgotPassword/ArrowBack";
import Forms from "../../ui/pages/ForgotPassword/Forms";
import ImagePage from "../../ui/pages/ForgotPassword/ImagePage";

export default function ForgotPassword() {
    return (
        <div className="w-full md:px-0 px-4 grid grid-cols-12 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white transition-all duration-300">
            <div className="relative md:col-span-7 col-span-12 w-full min-h-full flex flex-col justify-center items-center gap-16 py-4">
                <ArrowBack />
                <Forms />
            </div>
            <ImagePage />
        </div>
    )
}
