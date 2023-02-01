import { projects } from "../../data/projects"

function ProjectPreview(props) {
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

export default ProjectPreview