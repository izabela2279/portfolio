import { projects } from "../../data/projects"

function ProjectList(props) {
  return (
    <>
      <ul>
      {projects.map(project =>
        <li id="container" key={project.title}>
          {project.title}
        </li>)}
      </ul>
    </> 
  )
}

export default ProjectList