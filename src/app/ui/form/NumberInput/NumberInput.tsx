import { useTranslations } from "next-intl";
import { TextInputProps } from "../TextInput/TextInput";

export default function NumberInput({ name, required, title, des, value }: TextInputProps) {
  const t = useTranslations("Cards")
  return (
    <div
      className="flex flex-col gap-2 w-full"
    >
      <label htmlFor={name} className="flex md:flex-row flex-col gap-1">
        {t(title)}
        {des &&
          <span className="text-[#A2A3A2]">
            {t(des)}
          </span>
        }
      </label>
      <input
        type="number"
        required={required}
        name={name}
        defaultValue={value ? value : ""}
        id={name}
        className="border inputNum appearance-none border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent w-full"
      />
    </div>
  );
}
