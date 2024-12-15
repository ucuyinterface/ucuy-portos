import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © Footer
      </footer>
    </main>
  );
}
