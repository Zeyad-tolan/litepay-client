import HeaderRequestPage from "@/src/app/ui/pages/dashboard/requestPage/layout/HeaderRequestPage";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className='container mx-auto px-4 min-h-screen bg-white dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
            <HeaderRequestPage />
            {children}
        </section>
    );
}

export default RootLayout;
