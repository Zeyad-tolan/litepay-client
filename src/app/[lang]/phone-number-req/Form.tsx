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

export default function Form() {
  const [part, setPart] = useState<number>(1);
  const [token, setToken] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <TitlePage />
      <div
        className={`relative md:w-1/2 w-11/12 bg-white text-black dark:bg-primaryDark dark:text-white rounded-3xl transition-all duration-1000  ${
          part == 1
            ? "md:ltr:h-[230px] ltr:h-[255px] md:rtl:h-[230px] rtl:h-[250px]"
            : "md:ltr:h-[250px] ltr:h-[275px] md:rtl:h-[250px] rtl:h-[270px]"
        }  transition-all duration-300 overflow-hidden`}
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
            phoneNumber: phone.startsWith("0") ? `+2${phone}` : `+20${phone}`,
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

export function PhoneNumber({ name, value, setValue }: PhoneNumberProps) {
  const t = useTranslations("Cards");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 11 digits
    const numericValue = event.target.value.replace(/\D/g, "").slice(0, 11);
    setValue?.(numericValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent non-numeric key presses
    if (
      !/[0-9]/.test(event.key) &&
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="flex md:flex-row flex-col gap-1">
        {t("phone-number")}
      </label>
      <div className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full flex gap-2">
        <p>+2</p>
        <input
          type="tel"
          required
          name={name}
          id={name}
          value={value}
          minLength={11}
          maxLength={11}
          pattern="[0-9]{11}"
          inputMode="numeric"
          className="outline-none bg-transparent flex-1"
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          placeholder="01XXXXXXXXX"
        />
        <Image
          alt="egypt"
          src={srcImage}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
      {value && value.length > 0 && value.length < 11 && (
        <p className="text-red-500 text-sm mt-1">
          {t("phone-number-validation")}
        </p>
      )}
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
