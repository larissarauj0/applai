"use client";
import { useState } from "react";
import {extractPdfText} from "../libs/ExtractFilePDF";

const StepOne = () => {
  const [statusStepOne, setStatusStepOne] = useState<
    "none" | "upload" | "manual"
  >("none");
  const [file, setFile] = useState<File | null>(null);
  const [textoExtraido, setTextoExtraido] = useState("");
  const processarPDF = async () => {
    if (!file) return;
    const texto = await extractPdfText(file);
    setTextoExtraido(texto);
  };

  return (
    <div>
      {statusStepOne === "none" && (
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-12 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
            onClick={() => setStatusStepOne("upload")}
          >
            Upload PDF
          </button>
          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
            onClick={() => setStatusStepOne("manual")}
          >
            Digitar CV
          </button>
        </div>
      )}

      {statusStepOne !== "none" && (
        <div className="mt-4 flex flex-col items-center justify-center gap-4">
          {statusStepOne === "upload" && (
            <div className="flex flex-col items-center gap-4">
              <label
                suppressHydrationWarning
                className="cursor-pointer bg-[#1a2a4a] text-[#f0f6ff] rounded-xl px-5 py-2 border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
              >
                {file ? file.name : "Escolher PDF"}
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </label>
              {file !== null && (
                <button
                  className="cursor-pointer bg-[#1a2a4a] text-[#f0f6ff] rounded-xl px-5 py-2 border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
                  onClick={processarPDF}
                >
                  Processar PDF
                </button>
              )}
            </div>
          )}
          {textoExtraido && (
            <div className="text-[#8ba3c7] text-sm max-h-40 overflow-y-auto w-full p-3 bg-[#111827] rounded-lg">
              {textoExtraido}
            </div>
          )}

          {statusStepOne === "manual" && (
            <p className="text-[#f0f6ff]">Formulário manual</p>
          )}

          <button
            className="bg-[#1a2a4a] text-[#f0f6ff] rounded-xl h-10 w-20 cursor-pointer border border-[#21355c] hover:bg-[#4a9eff] hover:text-[#1a2a4a] transition duration-300"
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
