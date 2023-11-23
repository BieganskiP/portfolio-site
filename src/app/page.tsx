import Hero from "@/components/Hero";
import VerticalProgressBar from "@/components/ui/VerticalProgressBar";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <VerticalProgressBar />
      <Hero />
      <WhyUs />
    </main>
  );
}
