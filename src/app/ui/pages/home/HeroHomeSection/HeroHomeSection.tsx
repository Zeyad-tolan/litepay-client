import srcImage from "@/src/shared/heroImage.webp";
import Image from "next/image";

export default function HeroHomeSection() {
  return (
    <section
      className="w-full"
    >
      <Image
        src={srcImage}
        alt="carts"
        className="w-full"
      />
    </section>
  );
}
