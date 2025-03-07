"use client";

import srcImage from "@/src/shared/signup.jpg";
import { handelSubmitRegister } from "@/src/util/handelRegister";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import EmailInput from "../../ui/form/EmailInput";
import GoogleInput from "../../ui/form/GoogleInput";
import HeroForm from "../../ui/form/HeroForm";
import PasswordInput from "../../ui/form/PasswordInput";
import SubmitBtn from "../../ui/form/SubmitBtn";

export default function Signup() {
    const t = useTranslations("Auth")
    const { lang } = useParams()
    const [errorValue, setErrorValue] = useState<string>("")

    return (
        <div className="w-full md:px-0 px-4 grid grid-cols-12 md:min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white transition-all duration-300">
            <form
                className="md:col-span-7 col-span-12 w-full h-full flex flex-col justify-center items-center gap-8 py-4"
                onSubmit={(e) => handelSubmitRegister(e, setErrorValue, lang as string)}
            >
                <HeroForm page="signup" />
                <div className="w-full flex flex-col justify-center items-center gap-8">
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                        <EmailInput
                            id="email-signup"
                            name="email"
                        />
                        <PasswordInput
                            id="password-input"
                            name="password"
                            type="password"
                        />
                        <PasswordInput
                            id="confirm-password-input"
                            name="passwordConfirm"
                            type="passwordConfirm"
                        />
                        <p className={`md:w-3/5 w-full text-red-500 text-start ${errorValue == "" ? "hidden" : ""}`}>
                            {t(errorValue)}
                        </p>
                    </div>
                    <div className=" md:w-3/5 w-full flex flex-col justify-center items-center gap-4">
                        <SubmitBtn title="sign-up" />
                        <GoogleInput />
                    </div>
                </div>
            </form>
            <Image
                className="md:block col-span-5  hidden md:h-full "
                src={srcImage}
                alt="signup"
            />
        </div>
    )
}
