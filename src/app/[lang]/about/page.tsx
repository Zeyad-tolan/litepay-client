import aboutImg from '@/src/shared/about.png';
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations('About');

  return (
    <section className='min-h-screen flex items-center dark:bg-primaryDark text-black dark:text-secondaryDark transition-all duration-300'>
      <div className="container mx-auto md:px-0 px-2 py-12">
        <h1 className="text-4xl ltr:font-outfit font-semibold pb-5 hidden md:flex ">
          {t('title')}
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between">
          <div className="w-full md:w-2/3 flex flex-col items-start md:pe-20">
            <p className="text-base md:text-lg md:rtl:text-xl ">
              {t('desc-one')}
            </p>
            <p className="text-base md:text-lg md:rtl:text-xl py-10 ">
              {t('desc-two')}
            </p>
            <p className="text-base md:text-lg md:rtl:text-xl ">
              {t('desc-three')}
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl md:rtl:text-6xl font-semibold py-5 md:pb-5 md:hidden block">
            {t('title')}
          </h1>
          <div className="w-full flex justify-center md:w-1/3">
            <Image
              className="h-full w-full"
              src={aboutImg}
              alt="about photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}