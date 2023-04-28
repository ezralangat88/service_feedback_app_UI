import Card from "../common/Card"


const FeetbackItem = ({ item }) => {
    
  return (
    <Card>
        <div className='num-display'>{item?.rating}</div>
        <div className='text-display'>{item?.text}</div>
    </Card>
  )
}

export default FeetbackItem