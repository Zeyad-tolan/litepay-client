import { ForgotPasswordPartFourIcon, ForgotPasswordPartOneIcon, ForgotPasswordPartThreeIcon } from "@/src/app/icons/icons";
import { Dispatch, SetStateAction } from "react";

export type StagePointsProps = {
  parts: 1 | 2 | 3 | 4,
  setParts: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
};
export default function StagePoints({ parts, setParts }: StagePointsProps) {
  return (
    <>
      {
        parts == 1 ?
          <ForgotPasswordPartOneIcon props={{ className: "md:w-3/6 w-full" }} /> :
          parts == 2 ?
          //   <ForgotPasswordPartTwoIcon setParts={setParts} props={{ className: "md:w-3/6 w-full" }} /> :
            <ForgotPasswordPartThreeIcon setParts={setParts} props={{ className: "md:w-3/6 w-full" }} /> :
            parts == 3 ?
              <ForgotPasswordPartThreeIcon setParts={setParts} props={{ className: "md:w-3/6 w-full" }} /> :
              <ForgotPasswordPartFourIcon setParts={setParts} props={{ className: "md:w-3/6 w-full" }} /> 
      }
    </>
  );
}
