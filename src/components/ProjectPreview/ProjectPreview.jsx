import { Link } from "react-router-dom"
import { hyphenateWords } from "../../utilities/hyphenateWords"

function ProjectPreview(props) {
  console.log(props);
  return (
    <>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
        <h1>{props.title}</h1>  
        <Link to={`/projects/${props.title}`}>  
        <button>More Details</button>
        </Link> 
      </section>
    </> 
  )
}

export default ProjectPreview