import { Link } from "react-router-dom"
import Card from "./Card"

const About = () => {
  return (
    <Card>
        <h2>This is an Interesting App <Link  style={{alignItems: "centre"}} to = '/'>Go back</Link> </h2>
         
        
    </Card>
  )
}

export default About