"use client";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FormPartOneProps } from "../../ui/pages/cartReq/FormPartOne/FormPartOne";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { BackArrowIcon } from "../../icons/icons";
import SubmitBtn from "../../ui/form/SubmitBtn";
import Image from "next/image";
import { PhoneNumberProps } from "../../ui/form/PhoneNumber/PhoneNumber";
import srcImage from "@/src/shared/Flag_of_Egypt.png";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { TextInputProps } from "../../ui/form/TextInput/TextInput";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import React from "react";

export default function Form() {
  const [part, setPart] = useState<number>(1);
  const [token, setToken] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <TitlePage />
      <div
        className="relative md:w-1/2 w-11/12 bg-white text-black dark:bg-primaryDark dark:text-white rounded-3xl transition-all duration-300 overflow-hidden"
        style={{
          height: part == 1 ? "255px" : "275px",
          minHeight: part == 1 ? "255px" : "275px",
        }}
      >
        <AnimatePresence>
          {part == 1 ? (
            <FormPartOne key={1} setPart={setPart} setToken={setToken} />
          ) : (
            <FormPartTwo key={2} setPart={setPart} token={token} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TitlePage() {
  const t = useTranslations("Cards");
  return (
    <p className="text-center text-white font-medium text-3xl">
      {t("phone-number-req")}
    </p>
  );
}

export function FormPartOne({ setPart, setToken }: FormPartOneProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/change-phone-number-req`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: Cookies.get("token") as string,
          },
          body: JSON.stringify({
            phoneNumber: phone,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        if (setToken) {
          setToken(() => data?.changeMyPhoneNumberToken as string);
        }
        setPart(2);
      } else {
        toast.error(data?.message || "something-went-wrong");
      }
    } catch (error: unknown) {
      console.error("Error submitting phone number:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("something-went-wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex flex-col justify-center items-center gap-8 w-full absolute py-5 h-full px-8"
      style={{ minHeight: "250px" }}
    >
      <div className="flex flex-col justify-between gap-4 w-full">
        <PhoneNumber name="phone" value={phone} setValue={setPhone} />
      </div>
      <SubmitBtn title="next" disabled={loading} />
    </motion.form>
  );
}

export function FormPartTwo({ setPart, token }: FormPartOneProps) {
  const router = useRouter();
  const { lang } = useParams();
  const [disable, setDisable] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  // console.log(otp, token);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/apply-change-phone-number`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: Cookies.get("token") as string,
          },
          body: JSON.stringify({
            otp: `${otp}`,
            changeMyPhoneNumberToken: token,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "phone number changed successfully");
        setDisable(false);
        router.push(`/${lang}/card-dashboard`);
      } else {
        toast.error(data?.message || "something went wrong");
        setDisable(false);
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong");
      }
    } finally {
      setDisable(false);
    }
  };
  return (
    <>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={(e) => handleSubmit(e)}
        className="w-full absolute py-5 px-8"
      >
        <div
          onClick={() => setPart(1)}
          className="cursor-pointer text-black dark:!text-white mb-5"
        >
          <BackArrowIcon
            className={`text-black dark:!text-white ${
              lang === "en" ? "rotate-0" : "rotate-180"
            } `}
          />
        </div>
        <NumberInput
          name="otp"
          required
          title="OTP"
          des="one-time-password"
          value={otp}
          setValue={setOtp}
        />
        <div className="mt-6">
          <SubmitBtn title="next" disabled={disable} />
        </div>
      </motion.form>
    </>
  );
}

const theme = localStorage.getItem("theme");

const phoneInputStyles = {
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    color: theme === "dark" ? "white" : "black",
    backgroundColor: "transparent",
  },
};

export function PhoneNumber({ name, value, setValue }: PhoneNumberProps) {
  const t = useTranslations("Cards");

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <div className="phone-input-container">
          <PhoneInput
            name={name}
            defaultCountry="eg"
            value={value}
            onChange={(phone) => setValue?.(phone)}
            style={phoneInputStyles.container}
            inputStyle={phoneInputStyles.input}
            placeholder="Enter phone number"
            className="w-full"
          />
        </div>
      </div>
      {value && value.length > 0 && value.length < 11 && (
        <p className="text-red-500 text-sm mt-1">
          {t("phone-number-validation")}
        </p>
      )}

      <style jsx global>{`
        /* Phone input container */
        .phone-input-container {
          position: relative !important;
          z-index: 50 !important;
        }

        /* Input container */
        .react-international-phone-input-container {
          width: 100%;
          display: flex !important;
          align-items: center !important;
          border-radius: 4px !important;
          overflow: hidden !important;
        }

        /* Input field */
        .react-international-phone-input {
          width: 100% !important;
          border-radius: 4px !important;
          height: 40px;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
        }

        /* Country selector button */
        .react-international-phone-country-selector-button {
          border-top-left-radius: 4px !important;
          border-bottom-left-radius: 4px !important;
          border-right: none !important;
          padding: 0 10px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 40px !important;
          background-color: transparent !important;
        }

        /* Dropdown as modal in center of screen */
        .react-international-phone-country-selector-dropdown {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 90% !important;
          max-width: 320px !important;
          max-height: 60vh !important;
          overflow-y: auto !important;
          z-index: 9999 !important;
          background-color: white !important;
          border: 1px solid #d1d5db !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
          padding: 10px 0 !important;
        }

        /* Modal overlay background */
        .react-international-phone-country-selector-dropdown::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 1);
          z-index: -1;
        }

        /* Country items */
        .react-international-phone-country-selector-dropdown-item {
          padding: 8px 15px !important;
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          cursor: pointer !important;
          background: white !important;
          transition: background-color 0.2s ease !important;
        }

        .react-international-phone-country-selector-dropdown-item:hover {
          background-color: #f3f4f6 !important;
        }

        /* Flag styling */
        .react-international-phone-country-flag-img {
          width: 20px !important;
          height: auto !important;
          border-radius: 2px !important;
          object-fit: cover !important;
        }

        /* Search input */
        .react-international-phone-country-selector-dropdown-search-input {
          width: 100% !important;
          padding: 8px 15px !important;
          border: none !important;
          border-bottom: 1px solid #e5e7eb !important;
          margin-bottom: 5px !important;
          font-size: 14px !important;
          outline: none !important;
        }

        /* Dark mode styles */
        .dark .react-international-phone-country-selector-dropdown {
          background-color: white !important;
          border-color: #475569 !important;
        }

        .dark .react-international-phone-country-selector-dropdown-item:hover {
          background-color: #334155 !important;
        }

        .dark
          .react-international-phone-country-selector-dropdown-search-input {
          background-color: #1e293b !important;
          border-color: #475569 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}

export function NumberInput({
  name,
  required,
  title,
  des,
  value,
  setValue,
}: TextInputProps) {
  const t = useTranslations("Cards");
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="flex md:flex-row flex-col gap-1">
        {t(title)}
        {des && <span className="text-[#A2A3A2]">{t(des)}</span>}
      </label>
      <input
        type="number"
        required={required}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        className="border inputNum appearance-none border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent w-full"
      />
    </div>
  );
}
