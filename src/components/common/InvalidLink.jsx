import Card from "./Card"
import { Link } from "react-router-dom"

const InvalidLink = () => {
  return (
    <Card>
        <h2>Invalid Link! <Link to = '/'>Go back</Link> </h2>
        
    </Card>
  )
}

export default InvalidLink