import Card from "../common/Card"
import { useState } from "react"
import Button from "../common/Button";
import RatingSelect from "./RatingSelect";


const FeedbackForm = ({handleAddFeedback}) => {

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)



    const handleTextChange = (e) =>{
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Feedback text must be atleast 10 characters')
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating,
            }
            handleAddFeedback(newFeedBack)
            setText('')

        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How do you rate our services?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input  
                onChange={handleTextChange}
                type="text"
                placeholder="write your review"
                />
                <Button type="submit" isDisabled={btnDisabled}> Send </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm