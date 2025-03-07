"use client"
import srcImage from "@/src/shared/login.jpg";
import { handelSubmitLogin } from "@/src/util/handelLogin";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import HeroForm from "../../../form/HeroForm";
import EmailInput from "../../../form/EmailInput";
import PasswordInput from "../../../form/PasswordInput";
import LinkLocal from "../../../elements/LinkLocal";
import SubmitBtn from "../../../form/SubmitBtn";
import GoogleInput from "../../../form/GoogleInput";

export default function LoginComponent() {
    const t = useTranslations("Auth")
    const { lang } = useParams()
    const [errorValue, setErrorValue] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className="w-full md:px-0 px-4 grid grid-cols-12 md:min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white transition-all duration-300">
            <form
                onSubmit={(e) => handelSubmitLogin(e, setErrorValue, lang as string,setIsLoading)}
                className="md:col-span-7 col-span-12 w-full h-full flex flex-col justify-center items-center gap-8 py-4">
                <HeroForm page="login" />
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
                        <p className={`md:w-3/5 w-full text-red-500 text-start ${errorValue == "" ? "hidden" : ""}`}>
                            {t(errorValue)}
                        </p>
                        <LinkLocal src="forgot-password" style="text-end md:w-3/5 w-full">
                            {t("forgot-password")}
                        </LinkLocal>
                    </div>
                    <div className=" md:w-3/5 w-full flex flex-col justify-center items-center gap-4">
                        <SubmitBtn title="login" disabled={isLoading} />
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
