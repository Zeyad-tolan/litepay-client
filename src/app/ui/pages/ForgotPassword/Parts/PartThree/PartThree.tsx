import OTPInput from "@/src/app/ui/form/OTPInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { handelSubmitPartThreeForgotPassword } from "@/src/util/forgotPassword";
import HeroForgotPassword from "../../HeroForgotPassword";
// import { PartOneProps } from "../PartOne/PartOne";
import { Dispatch, SetStateAction } from "react";

interface IProp {
  setParts: Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
  value: string;
}
export default function PartThree({ setParts,value }: IProp) {
  return (
    <form
      onSubmit={(e) => handelSubmitPartThreeForgotPassword(e, setParts)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-14">
      <HeroForgotPassword title="forgot-password-part-three" des="forgot-password-part-three-des" emailOrPhone={value} />
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <OTPInput />
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
