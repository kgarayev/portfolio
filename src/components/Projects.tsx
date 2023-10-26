import Box from "./Box";
import { useSelector } from "react-redux";
import { selectProjectList } from "../store/mainSlice";

interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  buttonText: string;
}

const Projects = () => {
  const projectList = useSelector(selectProjectList);

  return (
    <div className="mt-6">
      <div className="w-full text-center">
        <h2 className="text-xl font-bold">Featured Projects</h2>
      </div>
      <div className="mb-16 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-5">
        {projectList.map((item: ProjectItem) => {
          return (
            <Box
              title={item.title}
              description={item.description}
              tag={item.tag}
              buttonText={item.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
