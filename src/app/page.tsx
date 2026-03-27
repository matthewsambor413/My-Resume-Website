import { Hero } from "@/components/sections/Hero";
import { MyStory } from "@/components/sections/MyStory";
import { Resume } from "@/components/sections/Resume";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MyStory />
      <Resume />
      <Testimonials />
      <Contact />
    </>
  );
}
