import ProjectList from "../components/ProjectList/ProjectList"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ProjectList projects={projects}/>
    </section> 
  )
}

export default Projects