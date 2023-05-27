import { createContext, useEffect, useState } from "react";
import FeedbackData from "../../Resources/FeedbacData";


const FeedBackContext = createContext({});


export const FeedBackProvider = ({children}) => {

    //feedback
    const [feedback, setFeedback] = useState([])

    const [isLoading, setIsLoading] = useState(true)


    //Run fetchFeedback
    useEffect(() => {
      fetchFeedback()
    }, [])
    

    //Fetch feedback 
    const fetchFeedback = async () =>{
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const feedbackData = await response?.json();
      setFeedback(feedbackData)
      setIsLoading(false)
    }


    //deleteFeedback
    const deleteFeedback = async (id) =>{
        if (window.confirm('Are you sure you want to remove the item?')) {

          await fetch(`/feedback/${id}`,{
            method: 'DELETE',
          })

          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      }

    //addFeedback
    const addFeedback = async (newFeedback) =>{
      const response = await fetch(`/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body :JSON.stringify(newFeedback),
      })

      const feedbackData = await response.json();

        setFeedback([feedbackData, ...feedback])
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
      const updateFeedback = async (id, updatedItem) =>{

        const response = await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type':'application/json' 
          },
          body: JSON.stringify(updatedItem),
        })

        const data = await response.json()

        setFeedback(
          feedback.map((item) =>(item.id === id ? {...item, ...data} : item))
        )
        }

    return (
       <FeedBackContext.Provider value={{feedback, feedbackEdit, isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback}}>
        {children}
       </FeedBackContext.Provider>
    )
    
   
}

export default FeedBackContext;