import { useTranslations } from "next-intl";

export type EmailInputProps = {
  id: string
  name: string
};

export default function EmailInput({ id, name }: EmailInputProps) {
  const t = useTranslations("Auth")

  return (
    <div
      className="flex flex-col gap-2 md:w-3/5 w-full"
    >
      <label
        htmlFor={id}>
        {t("email")}
      </label>
      <input
        type="email"
        name={name}
        id={id}
        required
        placeholder={t("your-email")}
        className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent"
      />
    </div>
  );
}
