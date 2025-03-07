import srcImage from "@/src/shared/bg-cart-req.jpg";
import Image from "next/image";

export default function BackGroundPage() {
  return (
    <Image
      alt="back ground"
      src={srcImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      className="object-cover "
    />
  );
}
