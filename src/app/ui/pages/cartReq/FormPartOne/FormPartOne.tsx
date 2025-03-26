"use client";
import { genderData } from "@/src/app/data/selectInputData";
import { handelSubmitPartOne } from "@/src/util/cartReqPartOne";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NumberInput from "../../../form/NumberInput";
import PhoneNumber from "../../../form/PhoneNumber";
import SelectInput from "../../../form/SelectInput";
import SubmitBtn from "../../../form/SubmitBtn";
import TextInput from "../../../form/TextInput";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

// Add custom styles for phone input
const theme = localStorage.getItem("theme");

const phoneInputStyles = {
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    color: theme === "dark" ? "white" : "black",
    height: "40px",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    backgroundColor: "transparent",
  },
};

export type FormPartOneProps = {
  setPart: Dispatch<SetStateAction<number>>;
  setToken?: Dispatch<SetStateAction<string>>;
  token?: string;
};

export default function FormPartOne({ setPart }: FormPartOneProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    sessionStorage.setItem("phone-card-req", phone);
  }, [phone]);
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={(e) => {
        setLoading(true);
        handelSubmitPartOne(e, setPart);
      }}
      className="flex flex-col justify-between gap-8 w-full absolute py-4 px-8"
    >
      <div className="flex flex-col justify-between gap-4 w-full">
        <TextInput
          name="name"
          required
          title="name"
          maxLength={20}
          value={sessionStorage.getItem("name-card-req") as string}
        />
        <div className="w-full">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <div className="relative">
            <PhoneInput
              name="phone"
              defaultCountry="eg"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              style={phoneInputStyles.container}
              inputStyle={phoneInputStyles.input}
              placeholder="Enter phone number"
              className="w-full"
            />
          </div>
        </div>
        <SelectInput
          name="gender"
          required
          title="gender"
          data={genderData}
          value={sessionStorage.getItem("gender-card-req") as string}
        />
        <NumberInput
          name="age"
          required
          title="age"
          value={sessionStorage.getItem("age-card-req") as string}
        />
      </div>
      <SubmitBtn title="next" disabled={loading} />

      <style jsx global>{`
        .react-international-phone-input-container {
          width: 100%;
        }
        .react-international-phone-input {
          border-radius: 4px !important;
          height: 40px;
        }
        .react-international-phone-country-selector-button {
          border-top-left-radius: 4px !important;
          border-bottom-left-radius: 4px !important;
          border-right: none !important;
          height: 40px;
          background-color: transparent !important;
        }
      `}</style>
    </motion.form>
  );
}
