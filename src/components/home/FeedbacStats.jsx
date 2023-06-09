import useFeedBackContext from "../context/useFeedBackContext"


const FeedbacStats = () => {

  const {feedback} = useFeedBackContext();

    //Rating average
    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length

    //Setting to one decimal place and removing trailing 0s
    average = average.toFixed(1).replace(/[.,]0$/, '')

    
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4 style={{marginLeft: '1rem'}}> Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbacStats.prototypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbacStats