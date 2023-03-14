import desktopBg from "../assets/images/bg-sidebar-desktop.svg";

export default function ImageDesktop({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="relative hidden h-full md:block">
      <img src={desktopBg} alt="" className=" max-h-full w-full" />

      <ul className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center">
        <li className="mb-3 flex items-center justify-center gap-3">
          <div
            className={` ${
              step == 1
                ? "bg-lightBlue text-black"
                : "border-lightBlue text-lightBlue"
            } grid aspect-square h-8 w-8 place-content-center rounded-full border-2  p-2 text-lg `}
          >
            1
          </div>
          <div className="flex flex-col items-start justify-center ">
            <span className="font-400  text-sm uppercase text-lightBlue">
              Step 1
            </span>
            <span className="w-[15ch] text-base uppercase text-white">
              Infos Générale
            </span>
          </div>
        </li>

        <li className="mb-3 flex items-center justify-center gap-3">
          <div
            className={` ${
              step == 2
                ? "bg-lightBlue text-black"
                : "border-lightBlue text-lightBlue"
            } grid aspect-square h-8 w-8 place-content-center rounded-full border-2  p-2 text-lg `}
          >
            2
          </div>
          <div className="flex flex-col items-start justify-center ">
            <span className="font-400  text-sm uppercase text-lightBlue">
              Step 2
            </span>
            <span className=" w-[15ch] text-base uppercase text-white">
              Compétences & expériences
            </span>
          </div>
        </li>

        <li className="mb-3 flex items-center justify-center gap-3">
          <div
            className={` ${
              step == 3
                ? "bg-lightBlue text-black"
                : "border-lightBlue text-lightBlue"
            } grid aspect-square h-8 w-8 place-content-center rounded-full border-2  p-2 text-lg `}
          >
            3
          </div>
          <div className="flex flex-col items-start justify-center ">
            <span className="font-400  text-sm uppercase text-lightBlue">
              Step 3
            </span>
            <span className="w-[15ch] text-base uppercase text-white">
              Projets & références
            </span>
          </div>
        </li>

        <li className="flex items-center justify-center gap-3">
          <div
            className={` ${
              step == 4
                ? "bg-lightBlue text-black"
                : "border-lightBlue text-lightBlue"
            } grid aspect-square h-8 w-8 place-content-center rounded-full border-2  p-2 text-lg `}
          >
            4
          </div>
          <div className="flex flex-col items-start justify-center ">
            <span className="font-400  text-sm uppercase text-lightBlue">
              Step 4
            </span>
            <span className="w-[15ch] text-base uppercase text-white">
              Plus
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
