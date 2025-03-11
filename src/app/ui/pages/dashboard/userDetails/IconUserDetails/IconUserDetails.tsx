import { DiamondDarkIcon } from "@/src/app/icons/icons";
import srcIcon from "@/src/shared/Diamond.svg";
import Image from "next/image";

export type IconUserDetailsProps = {
  type: string;
};
export default function IconUserDetails({ type }: IconUserDetailsProps) {
  return (
    <>
      {type == "vip" && (
        <>
          <Image
            src={srcIcon}
            alt=""
            loading="lazy"
            className={`${
              type == "vip"
                ? "border border-solid border-primary bg-primary/30 rounded-full h-10 w-10 p-2"
                : ""
            } dark:hidden`}
          />
          <DiamondDarkIcon
            className={`${
              type == "vip"
                ? "border border-solid border-primary bg-primary/30 rounded-full h-fit w-fit p-2 flex justify-center items-center"
                : ""
            } hidden dark:block`}
          />
        </>
      )}
    </>
  );
}
