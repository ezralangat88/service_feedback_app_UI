import FeetbackItem from "./FeetbackItem"
import FeedbackData from "../../Resources/FeedbacData"
import FeedbackList from "./FeedbackList"
import { useEffect, useState } from "react"
import FeedbacStats from "./FeedbacStats"
import FeedbackForm from "./FeedbackForm" 


const Home = () => {

 



  return (
    <>
    <FeedbackForm/>
    <FeedbacStats/>
    <FeedbackList 
    />
    </>
  )
}

export default Home