import ProjectPreview from "../ProjectPreview/ProjectPreview"

function ProjectList(props) {
  return (
    <>
      <ul>
      {props.projects.map(project => (
        <ProjectPreview  
          key={project.title} 
          title={project.title} 
          image={project.image}
        />          
      ))} 
      </ul>
    </> 
  )
}

export default ProjectList