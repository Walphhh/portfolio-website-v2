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
import Image from "next/image";
import ExperienceBadge from "./experience-badge";

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

    if (startYear === endYear) {
      return `${startMonth} – ${endMonth} ${startYear}`;
    }

    return `${startMonth} ${startYear} – ${endMonth} ${endYear}`;
  }

  return (
    <div
      key={props.position}
      className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0"
    >
      {/* Badge */}
      <ExperienceBadge experienceType={props.experienceType} />

      {/* Card */}
      <Card className="bg-[var(--layer-1)] w-full md:max-w-350 p-5 md:p-8 outline-outline shadow-md">
        <CardHeader className="p-3 md:p-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-4">
            <div className="w-full flex justify-between items-center">
              {/* Left side (text) */}
              <div className="flex flex-col text-left space-y-2">
                <CardTitle className="text-lg md:text-xl">
                  {props.position}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base break-words">
                  <div>{props.company}</div>
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-gray-700"
                  />
                  <div>{props.location}</div>
                </div>
                {/* Work Duration */}
                <div className="text-sm md:text-base text-gray-300 order-2 md:order-1 ">
                  {formatDuration(props.duration)}
                </div>
              </div>

              {/* Right side (logo) */}
              <div className="company-logo flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-md drop-shadow-sm">
                <Image
                  src={props.companyLogo || "/sillycat.jpg"}
                  alt={`${props.company}_logo`}
                  width={40}
                  height={40}
                  className="object-contain scale-125"
                />
              </div>
            </div>
          </div>
        </CardHeader>

        {/* Role Description */}
        <CardContent className="p-3 md:p-5">
          <CardDescription className="text-sm md:text-base">
            {props.description}
          </CardDescription>
        </CardContent>

        {/* Previous positions */}
        {previousPositions?.map((position, idx) => (
          <div
            key={`${position.position}-${idx}`}
            className="p-3 md:p-5 md:ms-10 space-y-1"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <CardTitle className="text-sm md:text-base">
                {position.position}
              </CardTitle>
              <h1 className="text-xs md:text-sm text-gray-400">
                {formatDuration(position.duration)}
              </h1>
            </div>
            <CardDescription className="text-sm md:text-base">
              {position.description}
            </CardDescription>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ExperienceCard;
