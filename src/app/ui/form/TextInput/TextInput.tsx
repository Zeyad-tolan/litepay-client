import { useTranslations } from "next-intl";

export type TextInputProps = {
  required: boolean,
  title: string,
  des?: string,
  name: string,
  maxLength?: number,
  value?: string
};
export default function TextInput({ name, required, title, des, maxLength, value }: TextInputProps) {
  const t = useTranslations("Cards")
  const validateInput = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(e.currentTarget.value)) {
      e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, "");
    }
  };
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
        type="text"
        required={required}
        name={name}
        id={name}
        defaultValue={value ? value : ""}
        onInput={(e) => validateInput(e)}
        maxLength={maxLength}
        className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent w-full"
      />
    </div>
  );
}
