import Card from "../common/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import useFeedBackContext from "../context/useFeedBackContext"


const FeetbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback} = useFeedBackContext();

    
  return (
    <Card reverse={true}>
        <div className='num-display'>{item?.rating}</div>
        <button onClick={()=> deleteFeedback(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>

        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple"/>
        </button>


        <div className='text-display'>{item?.text}</div>
    </Card>
  )
}

FeetbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeetbackItem