"use client";
import React from "react";
import { useState } from "react";

const StepOne = () => {
  const [statusStepOne, setStatusStepOne] = useState<
    "none" | "upload" | "manual"
  >("none");
  return (
    <div>
      {statusStepOne === "none" && (
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-12 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
            onClick={() => setStatusStepOne("upload")}
          >
            {" "}
            Upload PDF{" "}
          </button>
          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
            onClick={() => setStatusStepOne("manual")}
          >
            {" "}
            Digitar cv{" "}
          </button>
        </div>
      )}

      {statusStepOne !== "none" && (
        <div className="mt-4 flex flex-col items-center justify-center">
          {statusStepOne === "upload" && <p>Área de upload</p>}

          {statusStepOne === "manual" && <p>Formulário manual</p>}

          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300 mt-3"
            onClick={() => setStatusStepOne("none")}
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  );
};

export default StepOne;
