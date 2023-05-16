import { createContext, useState } from "react";
import FeedbackData from "../../Resources/FeedbacData";
import {v4 as uuidv4} from 'uuid'


const FeedBackContext = createContext({});


export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is from context',
          },
    ])

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
       <FeedBackContext.Provider value={{feedback, deleteFeedback, addFeedback}}>
        {children}
       </FeedBackContext.Provider>
    )
    
   
}

export default FeedBackContext;