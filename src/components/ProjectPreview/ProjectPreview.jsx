import { Link } from "react-router-dom"
import { hyphenateWords } from "../../utilities/hyphenateWords"

function ProjectPreview(props) {
  return (
    <>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
        <h1>{props.title}</h1> 
        <Link to={`/projects/${hyphenateWords(props.title)}`}>  
        <button>More Details</button>
        </Link> 
      </section>
    </> 
  )
}

export default ProjectPreview