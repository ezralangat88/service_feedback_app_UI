import FeetbackItem from "./FeetbackItem"
import FeedbackData from "../../Resources/FeedbacData"
import FeedbackList from "./FeedbackList"
import { useEffect, useState } from "react"
import FeedbacStats from "./FeedbacStats"
import FeedbackForm from "./FeedbackForm" 
import {v4 as uuidv4} from 'uuid'


const Home = () => {


    //Creating global state to be parsed to other components as prop
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
      if (window.confirm('Are you sure you want to remove the item?')) {
        setFeedback(feedback.filter((item)=>item.id !== id))
      }
    }


    const addFeedback = (newFeedback) =>{
      newFeedback.id = uuidv4() 
      console.log(newFeedback)
      setFeedback([newFeedback, ...feedback])
    }


  return (
    <>
    <FeedbackForm handleAddFeedback = {addFeedback}/>
    <FeedbacStats feedback={feedback}/>
    <FeedbackList 
    feedback={feedback}
    handleDelete={deleteFeedback}
    />
    </>
  )
}

export default Home