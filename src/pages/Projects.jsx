import ProjectList from "../components/ProjectList/ProjectList"
import { projects } from "../data/projects"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects}/>
    </> 
  )
}

export default Projects