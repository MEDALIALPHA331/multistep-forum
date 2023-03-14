import { useState } from "react";

function StepsMobile({ step }: { step: number }) {
  return (
    <ul className="flex items-center justify-center gap-2 md:hidden">
      <li
        value={1}
        className={`${
          step == 1 ? "bg-lightBlue text-black" : "text-lightBlue"
        } grid aspect-square w-10 place-content-center rounded-full border-2 border-lightBlue text-xl   `}
      >
        1
      </li>
      <li
        className={`grid aspect-square w-10 place-content-center rounded-full border-2 border-lightBlue text-xl ${
          step == 2 ? "bg-lightBlue text-black" : "text-lightBlue"
        }`}
      >
        2
      </li>
      <li
        className={` ${
          step == 3 ? "bg-lightBlue text-black" : "text-lightBlue"
        } grid aspect-square w-10 place-content-center rounded-full border-2 border-lightBlue text-xl`}
      >
        3
      </li>
      <li
        className={` ${
          step == 4 ? "bg-lightBlue text-black" : "text-lightBlue"
        } grid aspect-square w-10 place-content-center rounded-full border-2 border-lightBlue text-xl `}
      >
        4
      </li>
    </ul>
  );
}

export default StepsMobile;
