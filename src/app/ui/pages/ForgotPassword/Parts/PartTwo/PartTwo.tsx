import RadioInput from "@/src/app/ui/form/RadioInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { handelSubmitPartTwoForgotPassword } from "@/src/util/forgotPassword";
import HeroForgotPassword from "../../HeroForgotPassword";
import { PartOneProps } from "../PartOne/PartOne";

export default function PartTwo({ setParts }: PartOneProps) {
  return (
    <form
      onSubmit={(e) => handelSubmitPartTwoForgotPassword(e, setParts)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-14">
      <HeroForgotPassword title="forgot-password-part-two" des="forgot-password-part-two-des" />
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <RadioInput id="radio-email" name="send-otp" text="send-otp-code-to" value="email" emailOrPhone="ahmedmansour1239@gmail.com" />
        <RadioInput id="radio-phone" name="send-otp" text="send-otp-code-to" value="phone" emailOrPhone="+201019472864" />
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
