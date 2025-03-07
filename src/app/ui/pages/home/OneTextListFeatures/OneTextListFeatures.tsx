import { DotIcon } from "@/src/app/icons/icons";
import { useTranslations } from "next-intl";

export type OneTextListFeaturesProps = {
  text: string
};
export default function OneTextListFeatures({ text }: OneTextListFeaturesProps) {
  const t = useTranslations("Home")

  return (
    <div className="grid grid-cols-12 lg:text-lg">
      <DotIcon className="col-span-1 mt-2" />
      <p className="col-span-11">
        {t(text)}
      </p>
    </div>
  );
}
