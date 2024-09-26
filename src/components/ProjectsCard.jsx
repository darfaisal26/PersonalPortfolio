"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";
import ProjectScreenshots from "./ProjectScreenshots";

const ProjectCards = ({ value, num }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const closeScreenshots = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <FramerWrapper
        className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"}
        y={0}
        scale={0.8}
        delay={num / 4}
        duration={0.15}
      >
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>{value.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base font-poppins">{value.description}</p>
            <div className="w-full h-fit flex mt-2 justify-center flex-row gap-3">
              {value.tags.map((itm, indx) => (
                <span
                  key={indx}
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                    (itm === "Nextjs" && "bg-teal-100 text-teal-800") ||
                    (itm === "Freelancing" &&
                      "bg-yellow-100 text-yellow-800 ") ||
                    (itm === "Shadcn Ui" && "bg-blue-100 text-blue-800") ||
                    (itm === "Javascript" && "bg-red-100 text-red-800") ||
                    "bg-gray-100 text-gray-800"
                  }`}
                >
                  {itm}
                </span>
              ))}
            </div>
          </CardContent>
          {/* <CardFooter className="items-center justify-center flex">
            <button
              onClick={() => handleClick(value)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "flex"
              )}
            >
              View Screenshots <ArrowUpRight className="h-5 w-5 ml-1" />
            </button>
          </CardFooter> */}
        </Card>
      </FramerWrapper>

      {/* {selectedProject && (
        <ProjectScreenshots
          project={selectedProject}
          onClose={closeScreenshots}
        />
      )} */}
    </>
  );
};

export default ProjectCards;
