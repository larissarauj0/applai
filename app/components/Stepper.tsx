"use client";

import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

interface StepperProps {
  id: string;
}
const Stepper = ({ id }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div id={id}>
      <section className="flex flex-row items-center">
        <div className="flex flex-col">
          <span className="rounded-xl w-8 h-8 flex items-center justify-center bg-[#1a2a4a] border-2 border-[#2a4f7a]">
            1{" "}
          </span>
          <span className="text-[#f0f6ff]"> Seus dados </span>
        </div>
        <div className="h-0.5 w-16 bg-[#2a4f7a]" />
        <div className="flex flex-col">
          <span className="rounded-xl w-8 h-8 flex items-center justify-center bg-[#1a2a4a] border-2 border-[#2a4f7a]">
            2{" "}
          </span>
          <span className="text-[#f0f6ff]"> A vaga </span>
        </div>
        <div className="h-0.5 w-16 bg-[#2a4f7a]" />
        <div className="flex flex-col items-center justify-center">
          <span className="rounded-xl w-8 h-8 flex items-center justify-center bg-[#1a2a4a] border-2 border-[#2a4f7a]">
            3{" "}
          </span>
          <span className="text-[#f0f6ff]"> Resultado </span>
        </div>
      </section>
      <section>
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
      </section>
    </div>
  );
};

export default Stepper;
