"use client";

import { useState } from "react";
import Image from "next/image";
// import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Founder, BackendEngineer, DataAnalyst, LeadDeveloper, ProductManager, SoftwareEngineer, UXDesigner 
} from "@/assets";

interface TeamMember {
  name: string;
  role: string;
  image: any;
}

const teamMembers: TeamMember[] = [
  { name: "Emily Kim", role: "Founder", image: Founder, },
  { name: "David Chen", role: "Backend Engineer", image: BackendEngineer },
  { name: "Emma Rodriguez", role: "Lead Developer", image: LeadDeveloper },
  { name: "Julia Gimmel", role: "UX Designer", image: UXDesigner },
  { name: "Lisa Anderson", role: "Software Engineer", image: SoftwareEngineer },
  { name: "James Wilson", role: "Product Manager", image: ProductManager },
  { name: "James Wilson", role: "Data Analyst", image: DataAnalyst },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (index: number) => {
    setCurrentIndex(
      (index + teamMembers.length) % teamMembers.length
    );
  };

  const getPositionClass = (index: number) => {
    const offset =
      (index - currentIndex + teamMembers.length) %
      teamMembers.length;

    switch (offset) {
      case 0:
        return "z-10 scale-110 opacity-100 translate-x-0";
      case 1:
        return "z-5 scale-90 opacity-90 translate-x-[200px]";
      case 2:
        return "z-0 scale-80 opacity-70 translate-x-[400px]";
      case teamMembers.length - 1:
        return "z-5 scale-90 opacity-90 -translate-x-[200px]";
      case teamMembers.length - 2:
        return "z-0 scale-80 opacity-70 -translate-x-[400px]";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  return (
    <section id="testimonials" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-muted/40 p-6 md:pb-10 2xl:pb-16">
      {/* Background Title */}
      <h1 className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-4xl md:5xl 2xl:text-[7rem] font-black uppercase tracking-tight text-transparent gradient-transparent! bg-clip-text">
        OUR TEAM
      </h1>

      {/* Carousel */}
      <div className="relative mt-20 h-112 w-full max-w-7xl">
        {/* Left */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute left-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full  text-white transition hover:scale-110 gradient"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards */}
        <div className="relative flex h-full items-center justify-center">
          {teamMembers.map((member, index) => {
            const offset =
              (index - currentIndex + teamMembers.length) %
              teamMembers.length;

            const grayscale =
              offset === 0 ? "" : "grayscale";

            return (
              <div
                key={index}
                onClick={() => updateCarousel(index)}
                className={`absolute h-[380px] w-[280px] cursor-pointer overflow-hidden rounded-[20px] shadow-2xl transition-all duration-700 ${getPositionClass(
                  index
                )}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover transition-all duration-700 ${grayscale}`}
                />
              </div>
            );
          })}
        </div>

        {/* Right */}
        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute right-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full gradient text-white transition hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Member Info */}
      <div className="mt-6 text-center">
        <h2 className="relative inline-block text-3xl font-bold  md:text-4xl 2xl:text-5xl">
          {teamMembers[currentIndex].name}

          <span className="absolute top-full right-[calc(100%+20px)] h-0.5 w-32 2xl:w-40 bg-primary rounded-full" />
          <span className="absolute top-full left-[calc(100%+20px)] h-0.5 w-32 2xl:w-40 bg-primary rounded-full" />
        </h2>

        <p className="mt-2 text-lg uppercase tracking-[0.15em] ">
          {teamMembers[currentIndex].role}
        </p>
      </div>

      {/* Dots */}
      <div className="mt-6 md:mt-10 2xl:mt-12 flex gap-3">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => updateCarousel(index)}
            className={`size-3 rounded-full transition-all cursor-pointer ${
              currentIndex === index ? "scale-125 bg-primary" : "bg-text"
            }`}
          />
        ))}
      </div>
    </section>
  );
}