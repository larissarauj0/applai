"use client";
import Logo from "./assets/Logo";

const Header = () => {
  return (
    <header className="text-2xl font-bold flex items-center justify-between min-w-screen px-4 py-3 bg-[#1a2a4a] border-b-[#2a4f7a] border-b-2">
      <Logo size="md" showText={false} />
      <button className="text-[#f0f6ff] rounded-xl bg-[#4a9eff] hover:bg-[#60b8ff] px-3 py-1 text-sm cursor-pointer transition-colors duration-300">
        Começar
      </button>
    </header>
  );
};

export default Header;
