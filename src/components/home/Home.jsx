import FeetbackItem from "./FeetbackItem"
import FeedbackData from "../../Resources/FeedbacData"
import FeedbackList from "./FeedbackList"
import { useState } from "react"



const Home = () => {

    const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <FeedbackList feedback={feedback}/>
    </>
  )
}

export default Home