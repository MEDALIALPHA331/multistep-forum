function Footer({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  function backhandle() {
    if (step > 1) setStep((prev) => prev - 1);
    console.log("back" + step);
  }

  function nexthandle() {
    if (step < 4) setStep((prev) => prev + 1);
    console.log("next" + step);
  }

  //console.log(step);

  return (
    <footer className="fixed bottom-0  flex w-full items-center justify-between bg-white p-4 md:hidden">
      <button
        className="font-ubunto font-bold text-cooldgray"
        {...(step === 1 && { disabled: true })}
        onClick={backhandle}
      >
        Go Back
      </button>

      <button
        className="rounded-md bg-btnNext px-2 py-3 text-white"
        onClick={nexthandle}
      >
        Next Step
      </button>
    </footer>
  );
}

export default Footer;
