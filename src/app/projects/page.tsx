import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import Image from "next/image";
import TT1 from "../../../public/TT1.png";
import TT2 from "../../../public/TT2.png";
import Screenshot from "../../../public/Screenshot (18).png";
import Screenshot1 from "../../../public/Screenshot (19).png";
import Screenshot2 from "../../../public/Screenshot (20).png";
import Screenshot3 from "../../../public/Screenshot (21).png";
import Screenshot4 from "../../../public/Screenshot (22).png";
import Screenshotoo from "../../../public/Screenshot (28).png";
import Screenshotoo1 from "../../../public/Screenshot (36).png";
import Screenshotoo2 from "../../../public/Screenshot (33).png";
import Screenshotoo3 from "../../../public/Screenshot (34).png";
import Screenshotoo4 from "../../../public/Screenshot (35).png";
import Screenshotlb from "../../../public/Screenshot (80).png";
import Screenshotlb1 from "../../../public/Screenshot (81).png";
import Screenshotlb2 from "../../../public/Screenshot (82).png";
import Screenshotlb3 from "../../../public/Screenshot (83).png";
import Screenshotlb4 from "../../../public/Screenshot (84).png";
import vetcic1 from "../../../public/iPhone 14 Plus - 15.jpg";
import vetcic2 from "../../../public/iPhone 14 Plus - 16 (1).jpg";
import vetcic3 from "../../../public/iPhone 14 Plus - 16.jpg";

const projectsPage = () => {
  const Projects = [
    {
      title: "PTM - A Parent Teacher Meet Platform",
      description:
        "Developed a platform for seamless communication between parents and teachers, managing meetings, schedules, and feedback.",
      tags: ["ReactJS", "Tailwindcss", "Javscript", ".Net"],
      screenshots: [
        Screenshot,
        Screenshot2,
        Screenshot3,
        Screenshot4,
        Screenshot1,
      ],
    },
    {
      title: "CSM CorresPonding System Management",
      description:
        "Built a system to streamline document exchange and correspondence tracking between stakeholders.",
      tags: ["Reactjs", "Javascript", "Tailwindcss", ".Net"],
      screenshots: [
        Screenshotoo,
        Screenshotoo2,
        Screenshotoo3,
        Screenshotoo4,
        Screenshotoo1,
      ],
    },
    {
      title: "Land Bank Management System",
      description:
        "Designed and implemented components for land asset data input and visualization.",
      tags: ["Reactjs", "Javascript", "Tailwindcss", ".Net"],
      screenshots: [
        Screenshotlb,
        Screenshotlb2,
        Screenshotlb3,
        Screenshotlb4,
        Screenshotlb1,
      ],
    },
    {
      title: "Treasury Today is an online Magazine",
      description:
        "TT is an online magazine where users can view news, articles, and other financial updates.",
      tags: ["HTML/CSS", "Javacript", "Bootstrap"],
      screenshots: [TT1, TT2],
    },
    {
      title: "Vetic",
      description:
        "Vetic is a mobile application focused on power energy consumption.",
      tags: ["JavaScript", "React Native", "Tailwindcss"],
      screenshots: [vetcic1, vetcic2, vetcic3],
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Work Experience</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            A highly skilled{" "}
            <span className="text-blue-900 text-3xl">ReactJS Developer</span>{" "}
            with over <span className="text-blue-900 text-3xl">1.5 years</span>{" "}
            of experience in building dynamic and responsive web applications
            using ReactJS, Next.js, and React Native. Proficient in crafting
            scalable, high-performance UIs with deep expertise in JavaScript
            frameworks and modern frontend technologies. Experienced in
            developing cross-platform mobile apps with React Native, ensuring
            seamless user experiences across devices. Strong focus on writing
            clean, reusable code and following best practices in performance
            optimization, API integration, and responsive design. Passionate
            about solving problems and continuously improving user interfaces to
            deliver exceptional digital experiences.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((project, indx) => (
          <div key={indx} className="w-full">
            <ProjectCards key={indx} value={project} num={indx} />
            {project.screenshots && (
              <div className="flex flex-col items-center mt-8">
                <h2 className="text-xl font-semibold mb-4">
                  {project.title} Screenshots
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default projectsPage;
