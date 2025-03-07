import srcImage from "@/src/shared/CardFeatures.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OneTextListFeatures from "../OneTextListFeatures";

export default function FeaturesSection() {
  const t = useTranslations("Home")
  const items = ["item-one", "item-two", "item-three", "item-four", "item-five"]

  return (
    <section className="bg-white dark:bg-primaryDark text-black dark:text-white w-screen md:py-14 py-6">
      <div className="container mx-auto sm:px-0 px-2 flex md:flex-row flex-col gap-12 justify-between items-center">
        <Image
          src={srcImage}
          alt="srcImage"
          className="md:w-1/2 w-10/12"
        />
        <div className="flex flex-col gap-4">
          <p className="font-semibold lg:text-4xl text-3xl">
            {t("title-two")}
          </p>
          <div>
            {
              items.map((text, index) => {
                return <OneTextListFeatures text={text} key={index} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
