import srcImage from "@/src/shared/forgot-password-image.jpg";
import Image from "next/image";

export default function ImagePage() {
  return (
    <Image
      className="md:block col-span-5 hidden md:h-screen object-bottom"
      src={srcImage}
      alt="signup"
    />
  );
}
