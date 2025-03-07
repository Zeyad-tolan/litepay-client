import { useTranslations } from "next-intl";

export type SubmitBtnProps = {
  title: string
  disabled?: boolean
};
export default function SubmitBtn({ title, disabled }: SubmitBtnProps) {
  const t = useTranslations("Auth")

  return (
    <button
      disabled={disabled ? true : false}
      type="submit"
      className={`w-full bg-primary py-2 px-3 rounded-full font-medium ${disabled && "bg-primary/70 text-white cursor-not-allowed"}`}
    >
      {t(title)}
    </button>
  );
}
