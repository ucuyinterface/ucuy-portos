import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-mono gap-[64px]">
      <header className="flex flex-col items-center gap-4">
        {/* Badge Group */}
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-[#FEF2F2] text-red-600">
          <span className="text-sm font-medium">Open to Work</span>
          <span className="flex items-center gap-1 text-sm font-medium">
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33331 8H12.6666"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33337L12.6667 8.00004L8 12.6667"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </header>

      <main className="flex flex-col items-center text-center max-w-3xl gap-4">
        <p className="text-[var(--Colors-Text-text-tertiary, #475467)] text-lg font-[400] leading-[28px] font-[DM Mono]">
          Hello! This is Ucuy Interface crafting something.
        </p>

        <h1 className="text-4xl font-bold">
          2024 Work hub of Ucuy Interface.
        </h1>

        <p className="text-red-500 text-lg">
          "I design products and brands with the highest craft standards."
        </p>

        <p className="text-[var(--Colors-Text-text-tertiary, #475467)] text-lg font-[400] leading-[28px] font-[DM Mono]">
          I am a student of Information Systems with a strong passion for the world of product design. I enjoy creating digital products such as websites or mobile apps, with visually appealing designs to ensure that users find it easy to use the digital products I create.
        </p>
      </main>
    </div>
  );
}
