import Fullscreen from "@root-components/Fullscreen";
import ExperienceCard from "./ExperienceCard";
import { ExperienceList } from "./experienceList";

const Experience = () => {
  return (
    <section id="experience">
      <Fullscreen className="p-5 flex justify-center">
        <div className="space-y-10">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold underline dropShadow">
              Experience
            </h1>
          </div>
          <div className="flex">
            <div className="experience-line flex-col">
              <div className="hidden md:block relative left-4.5 h-full w-1 z-0 border-[var(--default-font)] bg-[var(--default-font)] border-r rounded-full" />
            </div>
            <div className=" space-y-5 z-10">
              {ExperienceList.map((experience) => {
                return (
                  <ExperienceCard key={experience.position} {...experience} />
                );
              })}
            </div>
          </div>
        </div>
      </Fullscreen>
    </section>
  );
};

export default Experience;
