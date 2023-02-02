import ProjectList from "../ProjectList/ProjectList"

function ProjectPreview(props) {
  return (
    <>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
        {props.title}     
      </section>
    </> 
  )
}

export default ProjectPreview