import PropTypes from 'prop-types' //impt
import { Link, NavLink } from 'react-router-dom'

const Header = ({text, bgColor, textColor}) => {

    const headerStyles = {
        backgroundColor: '',
        color: textColor,
        marginLeft: '2rem',
    }

  return (
    <header>
        <div style={headerStyles}>
         <NavLink to='/' activeClassName='active'> <h2>{text}</h2></NavLink>
        </div>
        <NavLink style={{marginRight: '2rem'}} to='/about' activeClassName='active' > <h2>About</h2></NavLink>
        
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback Dashboard',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'red',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header