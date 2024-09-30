import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            Dec 2020 - 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Masters of Computer Application, <br /> Islamia College of Science
              and Commerce
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I have done Masters of Computer Application form Islamia College
              of Science and Commerce. The program has provided me with a
              well-rounded education, covering both theoretical foundations and
              practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            May 2017 - 2020
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Application, <br /> Amar Singh College
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I have done Bachelor of Computer Application form Amar Singh
              College a Goverment College of J&K. The program has provided me
              with a well-rounded education, covering both theoretical
              foundations and practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
