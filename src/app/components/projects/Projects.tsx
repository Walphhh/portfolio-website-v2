import ProjectCard from "./ProjectCard";
import { projects } from "./projectsList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shadcn-ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect } from "react";

const Projects = () => {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  useEffect(() => {
    const e = document.getElementById("projects-carousel");
    if (!e) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          autoplay.current.play();
        } else {
          autoplay.current.stop();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(e);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="p-8 space-y-10">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold underline">Projects</h1>
      </div>

      {/* container for centering & padding */}
      <div className="w-full flex justify-center px-6 sm:px-8 lg:px-12">
        <div className="w-full max-w-7xl">
          <Carousel
            id="projects-carousel"
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
          >
            <CarouselContent
              className="py-10"
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.play()}
            >
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="md:basis-2/4 xl:basis-1/3"
                >
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-pointer" />
            <CarouselNext className="hover-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
