import { useEffect } from "react"
import FeetbackItem from "./FeetbackItem"
import {AnimatePresence, motion} from 'framer-motion'
import useFeedBackContext from "../context/useFeedBackContext"
import Spinner from "../common/Spinner"


const FeedbackList = () => {

    const {feedback, deleteFeedback, isLoading} = useFeedBackContext();

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }


  return isLoading? (<Spinner/>) : (
    <div className="container">
        <AnimatePresence>
        {
            feedback.map((item)=>(
                <motion.div
                    key={item.id}
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    exit = {{opacity: 0}}
                >
                <FeetbackItem 
                key={item.id} 
                item={item}
                handleDelete={deleteFeedback}
                />
                </motion.div>
            ))
        }
        </AnimatePresence>
    </div>
  )
}

// return (
//     <div className="container">
//         {
//             feedback.map((item)=>(
//                 <FeetbackItem 
//                 key={item.id} 
//                 item={item}
//                 handleDelete={handleDelete}
//                 />
//             ))
//         }
//     </div>
//   )
// }


export default FeedbackList