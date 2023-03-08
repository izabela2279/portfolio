import { findProject } from "../utilities/findProject"
import { useParams } from "react-router-dom"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)
  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title}/>
      <a href={project.repositoryLink}>GitHub</a>
      <a href={project.deploymentLink}>Deployed Site</a>
    </section>
  )
}

export default ProjectDetails