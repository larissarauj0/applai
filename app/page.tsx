import Header from "./components/Header";
import Stepper from "./components/Stepper";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0a0f1e]">
      <Header />
      <Hero />
      <Stepper id="stepper" />
    </main>
  );
}
