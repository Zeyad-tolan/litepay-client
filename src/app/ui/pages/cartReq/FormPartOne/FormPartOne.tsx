"use client";
import { genderData } from "@/src/app/data/selectInputData";
import { handelSubmitPartOne } from "@/src/util/cartReqPartOne";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import NumberInput from "../../../form/NumberInput";
import PhoneNumber from "../../../form/PhoneNumber";
import SelectInput from "../../../form/SelectInput";
import SubmitBtn from "../../../form/SubmitBtn";
import TextInput from "../../../form/TextInput";

export type FormPartOneProps = {
  setPart: Dispatch<SetStateAction<number>>;
  setToken?: Dispatch<SetStateAction<string>>;
  token?: string;
};

export default function FormPartOne({ setPart }: FormPartOneProps) {
  const [loading, setLoading] = useState<boolean>(false);
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
        <PhoneNumber
          name="phone"
          value={sessionStorage.getItem("phone-card-req") as string}
        />
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
    </motion.form>
  );
}
