// app/page.tsx
import HeroSection from "./components/HeroSection";
import MassSection from './components/Liturgies';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-12">
        <MassSection />
      </section>
    </>
  );
}
