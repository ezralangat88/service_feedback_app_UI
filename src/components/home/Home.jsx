import FeetbackItem from "./FeetbackItem"
import FeedbackData from "../../Resources/FeedbacData"
import FeedbackList from "./FeedbackList"
import { useEffect, useState } from "react"



const Home = () => {

    //Creating global state to be parsed to other components as prop
    const [feedback, setFeedback] = useState(FeedbackData)


  return (
    <>
    <FeedbackList feedback={feedback}/>
    </>
  )
}

export default Home