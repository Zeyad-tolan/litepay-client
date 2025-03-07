import srcImage from "@/src/shared/logo_short.png";
import Image from "next/image";

export default function LoaderPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-secondary transition-all duration-300">
      <div
        className="flex flex-col gap-8 items-center"
      >
        <Image
          src={srcImage}
          alt="Lite Pay"
          title="Lite Pay"
          className="animate-spinClockwise w-36 h-36"
        />
        <p className="font-english text-black dark:text-secondaryDark font-medium transition-all duration-300">
          LitePay ...
        </p>
      </div>
    </div>
  );
}
