import { useTranslations } from "next-intl";

export type RadioInputProps = {
  text: string,
  name: string,
  value: string,
  id: string,
  emailOrPhone: string,
};
export default function RadioInput({ name, text, value, id, emailOrPhone }: RadioInputProps) {
  const t = useTranslations("Auth")
  return (
    <div className="w-full flex items-center justify-start gap-4">
      <input
        type="radio"
        name={name}
        id={id}
        required
        value={value}
      />
      <label htmlFor={id}>
        {t(text) + " " + emailOrPhone}
      </label>
    </div>
  );
}
