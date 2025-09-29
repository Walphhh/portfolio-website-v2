import { ProjectCard as ProjectCardProps } from "./projectsList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shadcn-ui/card";
import { Button } from "@shadcn-ui/button";
import { ExternalLink, Github } from "lucide-react";
import DisplayTags from "../DisplayTags";
import Image from "next/image";

const ProjectCard = (props: ProjectCardProps) => {
  const imgSrc =
    props.imgSrc && props.imgSrc.trim() !== ""
      ? props.imgSrc
      : "/placeholder.svg"; // <-- put a placeholder in /public

  return (
    <Card
      className="flex flex-col bg-[var(--layer-1)] pt-0 overflow-hidden border border-border 
             hover:border-primary/50 hover:shadow-lg  rounded-4xl min-h-150
             transition-all duration-300 ease-out hover:-translate-y-2"
    >
      <div className="card-img-container h-80 p-5">
        <div className="relative h-full w-full overflow-hidden rounded-t-3xl">
          <Image
            src={imgSrc}
            alt={`project-photo-${props.title}`}
            fill
            className={`object-cover ${props.options || ""}`}
          />
        </div>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <DisplayTags tags={props.tags} />
      </CardContent>
      <CardFooter className="flex space-x-1">
        {props.liveUrl && (
          <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="hover:cursor-pointer">
              <ExternalLink />
              Live Demo
            </Button>
          </a>
        )}
        {props.githubUrl && (
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="hover:cursor-pointer">
              <Github />
              Github
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
