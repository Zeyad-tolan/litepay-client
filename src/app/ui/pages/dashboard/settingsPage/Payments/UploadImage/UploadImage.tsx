"use client"

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function UploadImage() {
  const t = useTranslations("dashboard");
  const [image,setImage] = useState<File | null>(null)
  return (
    <div className="flex items-center gap-2 mt-5">
      <span className="text-sm text-[#1A1B2380] dark:text-white">{t("image")}:</span>
      <div>
        <label htmlFor="image" className="block underline cursor-pointer">
          {
            image ? image.name : t("upload-image")
          }
        </label>
        <input type="file" onChange={(e) => setImage(e.target.files![0])} name="image" id="image" className="hidden" />
      </div>
    </div>
  );
}
