"use client";
import React from "react";
import { defineStepper } from "@stepperize/react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

const { Scoped, useStepper } = defineStepper(
  { id: "step1", title: "Seus dados" },
  { id: "step2", title: "A vaga" },
  { id: "step3", title: "Resultado" },
);

interface StepperProps {
  id: string;
}
const Stepper = ({ id }: StepperProps) => {
  const stepper = useStepper();
  const steps = ["step1", "step2", "step3"];
  const currentIndex = steps.indexOf(stepper.state.current.data.id);

  return (
    <div id={id}>
      <section className="flex flex-row items-center justify-center gap-0 my-8">
        {steps.map((stepId, index) => (
          <React.Fragment key={stepId}>
            <div key={stepId} className="flex flex-col items-center gap-2">
              <span
                className={`rounded-full w-9 h-9 flex items-center justify-center border-2 font-medium text-sm ${
                  index === currentIndex
                    ? "bg-[#4a9eff] border-[#4a9eff] text-[#f0f6ff]"
                    : index < currentIndex
                      ? "bg-[#1a2a4a] border-[#4a9eff] text-[#4a9eff]"
                      : "bg-[#111827] border-[#2a4f7a] text-[#3d5278]"
                }`}
              >
                {index < currentIndex ? "✓" : index + 1}
              </span>
              <span
                className={`text-xs ${
                  index === currentIndex
                    ? "text-[#f0f6ff]"
                    : index < currentIndex
                      ? "text-[#4a9eff]"
                      : "text-[#3d5278]"
                }`}
              >
                {index === 0
                  ? "Seus dados"
                  : index === 1
                    ? "A vaga"
                    : "Resultado"}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-16 mb-5 ${index < currentIndex ? "bg-[#4a9eff]" : "bg-[#2a4f7a]"}`}
              />
            )}
          </React.Fragment>
        ))}
      </section>
      <div className="flex items-center justify-center h-64 text-[#f0f6ff]">
        {stepper.flow.switch({
          step1: () => <StepOne />,
          step2: () => <StepTwo />,
          step3: () => <StepThree />,
        })}
      </div>

      <div className="flex justify-between items-center m-2">
        {stepper.state.isLast ? (
          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
            onClick={() => stepper.navigation.reset()}
          >
            Resetar
          </button>
        ) : (
          <>
            <button
              className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
              onClick={() => stepper.navigation.prev()}
              disabled={stepper.state.isFirst}
            >
              Voltar
            </button>
            <button
              className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
              onClick={() => stepper.navigation.next()}
            >
              Próximo
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Stepper;
