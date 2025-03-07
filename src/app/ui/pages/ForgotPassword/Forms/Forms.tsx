"use client";

import { useState } from "react";
import PartFour from "../Parts/PartFour";
import PartOne from "../Parts/PartOne";
import PartThree from "../Parts/PartThree";
// import PartTwo from "../Parts/PartTwo";
import StagePoints from "../StagePoints";

export default function Forms() {
  const [parts, setParts] = useState<1 | 2 | 3 | 4>(1)
  const [valueFirstPart,setValueFirst] = useState("")
  return (
    <>
      {
        parts == 1 ?
          <PartOne setParts={setParts} setValueFirst={setValueFirst}/> :
          parts == 2 ?
          //   <PartTwo setParts={setParts} /> :
            <PartThree setParts={setParts} value={valueFirstPart}/> :
            parts == 3 ?
              <PartThree setParts={setParts} value={valueFirstPart}/> :
              <PartFour setParts={setParts} />
      }
      <StagePoints parts={parts} setParts={setParts} />
    </>
  );
}
