import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SkillsReality from "@/components/SkillsReality";
import Superpowers from "@/components/Superpowers";
import TransitionSteps from "@/components/TransitionSteps";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SkillsReality />
      <Superpowers />
      <TransitionSteps />
      <Stories />
      <Footer />
    </>
  );
}
