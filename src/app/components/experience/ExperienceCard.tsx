import { Separator } from "@shadcn-ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shadcn-ui/card";
import {
  Duration,
  ExperienceCard as ExperienceCardInterface,
  Month,
} from "./experienceList";
import { Briefcase, Hand } from "lucide-react";
import Image from "next/image";

const ExperienceCard = (props: ExperienceCardInterface) => {
  const previousPositions = props.positions;

  const MONTHS: Record<Month, string> = {
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
  };

  function formatDuration(duration: Duration): string {
    const startMonth = MONTHS[duration.startDate.month];
    const startYear = duration.startDate.year;

    if (duration.endDate === "present") {
      return `${startMonth} ${startYear} – Present`;
    }

    const endMonth = MONTHS[duration.endDate.month];
    const endYear = duration.endDate.year;

    // If same year → collapse to "Jan – Apr 2025"
    if (startYear === endYear) {
      return `${startMonth} – ${endMonth} ${startYear}`;
    }

    // Otherwise → full range "Jan 2024 – Apr 2025"
    return `${startMonth} ${startYear} – ${endMonth} ${endYear}`;
  }

  return (
    <div key={props.position} className="flex space-x-10 ">
      <div className="flex flex-col justify-center items-center">
        <div className="h-8 w-8 p-1.5 rounded-full border border-[var(--default-font)] bg-[var(--default-font)] flex items-center justify-center">
          {props.experienceType === "work" ? (
            <Briefcase className="h-10 w-10 stroke-[var(--layer-0)] " />
          ) : (
            <Hand className="h-10 w-10 stroke-[var(--layer-0)] " />
          )}
        </div>
      </div>
      <Card className="bg-[var(--layer-1)] max-w-250 p5 outline-outline shadow-md">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex space-x-5">
              {/*Company Logo */}
              <div className="company-logo flex items-center justify-center w-16 h-16 bg-white rounded-md drop-shadow-sm">
                <Image
                  src={props.companyLogo || "/sillycat.jpg"}
                  alt={`${props.company}_logo`}
                  width={40}
                  height={40}
                  className="object-contain scale-140"
                />
              </div>
              <div className="flex flex-col justify-between">
                {/* Position Name */}
                <div>
                  <CardTitle className="text-xl">{props.position}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  {/* Company Name */}
                  <div>{props.company}</div>
                  <Separator
                    orientation="vertical"
                    className="min-w-0.5  bg-gray-700"
                  />
                  {/* Company Location */}
                  <div>{props.location}</div>
                </div>
              </div>
            </div>
            {/* Work Duration */}
            <div className="duration">
              <h1>{formatDuration(props.duration)}</h1>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Description of Role */}
          <CardDescription>{props.description}</CardDescription>
        </CardContent>
        {/* Displays any previous positions held at the company */}
        {previousPositions?.map((position, idx) => {
          return (
            <div
              key={`${position.position}-${idx}`}
              className="p-5 ms-10 space-y-1"
            >
              <div className="flex justify-between">
                <CardTitle>{position.position}</CardTitle>
                <h1>{formatDuration(position.duration)}</h1> {/* <-- FIXED */}
              </div>
              <CardDescription>{position.description}</CardDescription>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default ExperienceCard;
