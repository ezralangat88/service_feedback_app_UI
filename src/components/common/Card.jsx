import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

const Card = ({children, reverse}) => {
  return (
    //Conditional class & styling
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className='card'
         style={{
          backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
          color: reverse ? '#fff' : '#000',
         }}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.prototypes = {
  children: PropTypes.node.isRequired,
  reverse: propTypes.bool,
}

export default Card