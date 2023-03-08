import { findProject } from "../utilities/findProject"
import { useParams } from "react-router-dom"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)
  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p> image={project.image}</p>
      <a href="https://github.com/izabela2279/quiz-game.git">GitHub</a>
      <a href="https://espresso-quiz.netlify.app/">Deployed Site</a>
    </section> 
  )
}

export default ProjectDetails