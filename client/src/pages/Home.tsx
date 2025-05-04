import { FC } from "react";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";
import Gallery from "@/components/Gallery";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Slideshow />
      <Gallery />
    </>
  );
};

export default Home;
