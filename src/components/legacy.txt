import './App.css';
const items = [
  {id:1, description: "This the golden item"},
  {id:2, description: "This the golden item"},
  {id:3, description: "This the golden item"},
  {id:4, description: "This the golden item"},
  {id:5, description: "This the golden item"},
  {id:6, description: "This the golden item"},
]
function App() {
  return (
    <div className='d-flex flex-column align-items-center' >
    <h2>Shopping List</h2>
    <h4>No of items: {items.length}</h4>
    <ul>
      {
        items.map((item, index)=>(  
          
          <li key={index}>{item.description}</li>
        ))
      }
    </ul>
    <table className='d-flex flex-column align-items-center table  table-striped table-hover table-sm mt-0'>
      <thead>
        <tr>
        <th>Item_ID</th>
        <th>Description</th>
        </tr>
      </thead>
      <tbody>
       {
        items.map((item, index)=>(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.description}</td>
          </tr>
        ))
       }
      </tbody>
    </table>
    </div>
  );
}

export default App;
