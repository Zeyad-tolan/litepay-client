"use client";
import { FormEvent } from "react";
import InputPayments from "../InputPayments";
import UploadImage from "../UploadImage";
import TogglePayments from "../TogglePayments";
import SaveChangeButton from "../../SaveChangeButton";

export default function FormPayments() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <TogglePayments name="Vodafone" title="vodafone-cash" value={false} />
        <TogglePayments name="Instapaybtn" title="instapay" value={false} />
        <UploadImage />
        <InputPayments name="username" title="username" value="LitePay" width="200px" />
        <InputPayments name="link" title="link" value="https://www.instapay.eg/?lang=en" width="300px" />
        <div className="flex justify-center my-8">
          <SaveChangeButton />
        </div>
      </form>
    </div>
  );
}
