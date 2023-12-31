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
  const L = projectList.length;
  let newList: ProjectItem[] = [];

  for (let i = 0; i < L - 1; i++) {
    newList.push(projectList[i]);
  }

  return (
    <div ref={ref} id="projects" className="pt-2 pb-2">
      <div className="w-full p-5 pb-4">
        <h2 className="text-xl font-extrabold">Recent Projects</h2>
        <p className="font-nunito mt-4 mb-2">
          These are only a few of my recent projects. In addition to these apps,
          I have developed many more backend services and command-line interface
          tools. Though not as visually compelling, these projects demonstrate
          my experience in server-side programming, databases, and tool
          development. For more examples, visit my{" "}
          <a
            href="https://github.com/kgarayev"
            className="hover:underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </div>

      <div className="mb-4 grid grid-cols-1 items-start sm2:hidden lg2:grid lg2:grid-cols-3 gap-4 p-5 pt-0">
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

      <div className="hidden mb-4 grid grid-cols-1 items-start sm2:grid sm2:grid-cols-2 lg2:hidden gap-4 p-5 pt-0">
        {newList.map((item: ProjectItem) => {
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
