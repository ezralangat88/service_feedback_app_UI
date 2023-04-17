import { useEffect } from "react"
import FeetbackItem from "./FeetbackItem"

const FeedbackList = ({ feedback }) => {

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }


  return (
    <div className="container">
        {
            feedback.map((item)=>(
                <FeetbackItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default FeedbackList