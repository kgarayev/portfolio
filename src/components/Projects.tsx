import { forwardRef } from "react";
import Box from "./Box";
import { useSelector } from "react-redux";
import { selectProjectList } from "../store/mainSlice";

interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
  imageLink: string;
  code: string;
  live: string;
  stack: string;
  color: string;
}

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projectList = useSelector(selectProjectList);

  return (
    <div ref={ref} id="projects" className="pt-2 pb-2">
      <div className="w-full p-5 pb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>
      <div className="mb-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 p-5 pt-0">
        {projectList.map((item: ProjectItem) => {
          return (
            <Box
              title={item.title}
              description={item.description}
              tag={item.tag}
              buttonText={item.buttonText}
              imageLink={item.imageLink}
              key={item.title}
              code={item.code}
              live={item.live}
              stack={item.stack}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Projects;

Projects.displayName = "Projects";
