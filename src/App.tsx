import { useState } from "react";
import AddUser from "./Pages/addUser";
import { ImageDesktop, ImagePhone, Footer } from "./components";
import StepsMobile from "./components/StepsMobile";
import ButtonsMd from "./components/ButtonsMd";

function App() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="light">
      <main className="relative h-screen bg-magnoliabg dark:bg-[#111111] md:grid md:place-content-center ">
        <ImagePhone />

        <div className="items-center  justify-center md:relative md:mx-4 md:flex md:gap-24 md:rounded-lg md:bg-white md:p-4">
          <ImageDesktop step={step} setStep={setStep} />

          <div className="isolate flex flex-col items-center justify-center gap-7 pt-6">
            <StepsMobile step={step} />
            <AddUser step={step} setStep={setStep} />

            <ButtonsMd step={step} setStep={setStep} />
          </div>
        </div>

        <Footer step={step} setStep={setStep} />
      </main>
    </div>
  );
}

export default App;
