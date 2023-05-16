import { useEffect } from "react"
import FeetbackItem from "./FeetbackItem"
import {AnimatePresence, motion} from 'framer-motion'
import useFeedBackContext from "../context/useFeedBackContext"


const FeedbackList = () => {

    const {feedback, deleteFeedback} = useFeedBackContext();

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }


  return (
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