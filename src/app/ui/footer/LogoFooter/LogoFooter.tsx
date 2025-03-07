import srcImage from "@/src/shared/logo_big.png";
import Image from "next/image";
import Link from "next/link";

export default function LogoFooter() {
  return (
    <div className="w-fit flex flex-col gap-4 sm:items-start items-center">
      <Image
        src={srcImage}
        alt="logo"
        title="Lite-pay"
        loading="lazy"
        className="w-32"
      />
      <Link
        className="font-semibold text-primary"
        href="mailto:Support@litepay-EG.net">
        Support@litepay-EG.net
      </Link>
    </div>
  );
}
