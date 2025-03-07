"use client";
import { OurFileRouter } from "@/src/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";
/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

const { useUploadThing } = generateReactHelpers<OurFileRouter>()


export default function UploadImageInstaPay({setLoad}:{setLoad: Dispatch<SetStateAction<boolean>>}) {
  const t = useTranslations("Cards");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string | null>(null);
  const { startUpload } = useUploadThing("imageUploader")
  const [errorValue, setError] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setText("load")
    const file = event.target.files?.[0];
    if (file) {
      setError(false)
      startUpload([file]).then(res=>{
        // console.log(res)
        setSelectedImage(res? res[0].url : "")
        setLoad(false)
      }).catch(err=>{
        setText("error-upload")
        console.log(err)
      })
    }
    else{
      setError(true)
    }
  };

  return (
    <div
      className="bg-[#E8E8E8] dark:bg-primaryDark border border-solid border-[#7b7b7b] rounded-md w-fit mx-auto py-2 px-2 flex flex-col gap-1 cursor-pointer transition-all duration-300"
      onClick={() => document.getElementById("fileInput")?.click()}
    >
      <p className="">
        {t("msgInputImageSecond")}
      </p>
      <div className="w-2/3 h-28 rounded-md bg-[#c5c5c5] text-black mx-auto flex items-center justify-center overflow-hidden">
        {selectedImage.length > 0 ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          t(loading ? text : "no-selected")
        )}
      </div>
      {
        errorValue && <p className="text-sm text-red-500 mt-2">Please upload the screenshot</p>
      }
      <input
        id="fileInput"
        required
        type="file"
        accept="image/*"
        className="hidden"
        // defaultValue={selectedImage}
        onChange={handleImageChange}
      />
      <input
        id=""
        type="text"
        name="attachments"
        className="hidden"
        defaultValue={selectedImage}
      />
    </div>
  );
}
