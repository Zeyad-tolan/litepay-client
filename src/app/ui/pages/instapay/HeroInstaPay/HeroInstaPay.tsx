import srcImage from "@/src/shared/insta-pay-image.png";
import Image from "next/image";

export default function HeroInstaPay() {
  return (
    <div>
      <Image
        alt="instapay"
        src={srcImage}
        className="w-40"
      />
    </div>
  );
}
