interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, fontSize: "text-sm", gap: "gap-2" },
    md: { icon: 40, fontSize: "text-xl", gap: "gap-3" },
    lg: { icon: 56, fontSize: "text-3xl", gap: "gap-4" },
  };

  const { icon, fontSize, gap } = sizes[size];

  return (
    <div className={`flex items-center ${gap}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="20" fill="#1a2a4a" />

        <line
          x1="10"
          y1="52"
          x2="18"
          y2="52"
          stroke="#4a9eff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18 52 Q24 36 30 52"
          stroke="#4a9eff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 52 Q36 24 42 52"
          stroke="#60b8ff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M42 52 Q48 14 54 52"
          stroke="#90d4ff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="54"
          y1="52"
          x2="70"
          y2="52"
          stroke="#90d4ff"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="30" cy="30" r="3" fill="#4a9eff" opacity="0.7" />
        <circle cx="42" cy="22" r="2" fill="#60b8ff" opacity="0.5" />
        <circle cx="18" cy="38" r="2" fill="#4a9eff" opacity="0.4" />
      </svg>

      {showText && (
        <span className={`${fontSize} font-semibold tracking-tight text-[#f0f6ff]`}>
          Appl<span className="text-[#4a9eff]">AI</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
