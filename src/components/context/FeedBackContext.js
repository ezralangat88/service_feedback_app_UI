import { createContext, useState } from "react";
import FeedbackData from "../../Resources/FeedbacData";
import {v4 as uuidv4} from 'uuid'


const FeedBackContext = createContext({});


export const FeedBackProvider = ({children}) => {

    //feedback
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        rating: 10,
        text: 'This is from context',
      },
      {
        id: 2,
        rating: 3,
        text: 'Lorem ipsum dolor ',
      },
      {
        id: 3,
        rating: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
    ])

    //deleteFeedback
    const deleteFeedback = (id) =>{
        if (window.confirm('Are you sure you want to remove the item?')) {
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      }

    //addFeedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4() 
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
      }
  
      //Feedback edit
      const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false      
      })
  
      //Edit feedback
      const editFeedback = (item) =>{
        console.log(feedbackEdit)
        setFeedbackEdit({
          item,
          edit: true
        })

      }

      //Update feedback item
      const updateFeedback = (id, updatedItem) =>{
        setFeedback(
          feedback.map((item) =>(item.id === id ? {...item, ...updatedItem} : item))
        )
        }

    return (
       <FeedBackContext.Provider value={{feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
        {children}
       </FeedBackContext.Provider>
    )
    
   
}

export default FeedBackContext;