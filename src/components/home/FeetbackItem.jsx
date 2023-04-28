import Card from "../common/Card"
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


const FeetbackItem = ({ item, handleDelete }) => {

    
  return (
    <Card reverse={true}>
        <div className='num-display'>{item?.rating}</div>
        <button onClick={()=> handleDelete(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <div className='text-display'>{item?.text}</div>
    </Card>
  )
}

FeetbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeetbackItem