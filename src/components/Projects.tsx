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
}

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projectList = useSelector(selectProjectList);

  return (
    <div ref={ref} id="projects" className="pt-4 pb-4">
      <div className="w-full text-center p-5 pb-2">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="mb-16 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 p-5 pt-2">
        {projectList.map((item: ProjectItem) => {
          return (
            <Box
              title={item.title}
              description={item.description}
              tag={item.tag}
              buttonText={item.buttonText}
              imageLink={item.imageLink}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Projects;

Projects.displayName = "Projects";
