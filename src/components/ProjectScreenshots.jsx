import Image from "next/image";

const ProjectScreenshots = ({ project, onClose }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
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
      <button onClick={onClose} className="mt-4 text-red-500 font-semibold">
        Close
      </button>
    </div>
  );
};

export default ProjectScreenshots;
