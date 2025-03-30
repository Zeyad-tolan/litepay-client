"use client";
import srcImage from "@/src/shared/login.jpg";
import { handelSubmitLogin } from "@/src/util/handelLogin";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import HeroForm from "../../../form/HeroForm";
import EmailInput from "../../../form/EmailInput";
import PasswordInput from "../../../form/PasswordInput";
import LinkLocal from "../../../elements/LinkLocal";
import SubmitBtn from "../../../form/SubmitBtn";
import GoogleInput from "../../../form/GoogleInput";
import toast from "react-hot-toast";
import PopUpLayout from "../../../elements/PopUpLayout";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function LoginComponent() {
  const t = useTranslations("Auth");
  const { lang } = useParams();
  const [errorValue, setErrorValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdmin, setisAdmin] = useState<boolean>(false);
  const [adminparams, setAdminParams] = useState<
    { router: { param: string; userId: string } } | {}
  >({});
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isAdmin) {
      //   toast.success("you are an admin");
      setShow(() => true);
      //   toast.success(`${adminparams}`);
    }
  }, [isAdmin]);
  return (
    <>
      <div className="w-full md:px-0 px-4 grid grid-cols-12 md:min-h-screen bg-white dark:bg-primaryDark text-black dark:text-white transition-all duration-300">
        <form
          onSubmit={(e) =>
            handelSubmitLogin(
              e,
              setErrorValue,
              lang as string,
              setIsLoading,
              setisAdmin,
              setAdminParams
            )
          }
          className="md:col-span-7 col-span-12 w-full h-full flex flex-col justify-center items-center gap-8 py-4"
        >
          <HeroForm page="login" />
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <EmailInput id="email-signup" name="email" />
              <PasswordInput
                id="password-input"
                name="password"
                type="password"
              />
              <p
                className={`md:w-3/5 w-full text-red-500 text-start ${
                  errorValue == "" ? "hidden" : ""
                }`}
              >
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
      {show && (
        <PopUpAdmin setShow={setShow} show={show} adminParams={adminparams} />
      )}
    </>
  );
}

function PopUpAdmin({
  setShow,
  show,
  adminParams,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  adminParams: object;
}) {
  const { lang } = useParams();
  const t = useTranslations("Auth");
  const [otp, setOtp] = useState<string>("");
  const [otpError, setOtpError] = useState<string>("");
  const [logAToken, setLogAToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setOtp(value);
      setOtpError("");
    }
  };

  useEffect(() => {
    const sendOtp = async () => {
      if (otpSent) return;

      try {
        const { param, userId } = adminParams as {
          param: string;
          userId: string;
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/loginAdminSendOtp/${param}/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
          }
        );
        const data = await response.json();

        if (response.ok) {
          setLogAToken(data.logAToken);
          setOtpSent(true);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error: any) {
        toast.error(error.message);
        console.error("Error:", error);
      }
    };
    sendOtp();
  }, [adminParams, otpSent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { param, userId } = adminParams as {
      param: string;
      userId: string;
    };

    if (otp.length !== 4) {
      setOtpError("Please enter your OTP");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/validateOtpAdminAndLogin/${param}/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: Number(otp), logAToken }),
          redirect: "follow",
        }
      );

      const res = await response.text();
      const result = JSON.parse(res);

      if (response.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
        return;
      }

      const { user }: any = jwtDecode(result.token);
      Cookies.set("token", `${result.token}`, {
        expires: 1 / 48,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      Cookies.set("id", `${user.id}`, {
        expires: 1 / 48,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      if (user.Role && user.Role.type === "owner") {
        window.location.assign(`/${lang}/dashboard`);
      } else {
        window.location.assign(`/${lang}/card-dashboard`);
      }
    } catch (error: any) {
      // console.log("OTP submitted:", otp);
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PopUpLayout
      setShow={setShow}
      show={show}
      styleChildren="dark:bg-primaryDark"
    >
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">{t("2fa")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("2fa-title")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="otp-input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("f2a-code")}
            </label>
            <div className="relative">
              <input
                id="otp-input"
                type="text"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-3 text-lg tracking-widest text-center border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Enter your OTP code"
                maxLength={10}
              />
            </div>
            {otpError && (
              <p className="text-sm text-red-500 mt-1">{otpError}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <SubmitBtn title="verify" disabled={isLoading} />
            <button
              type="button"
              onClick={() => setShow(false)}
              className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {t("cancel")}
            </button>
          </div>
        </form>
      </div>
    </PopUpLayout>
  );
}
