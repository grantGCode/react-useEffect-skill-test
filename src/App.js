import { useState, useEffect } from 'react'

function App() {

  const [toDoListItems, setListItems] = useState([])

  useEffect(() => {
    const fetchToDos = async () => {
      const responce = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const items = await responce.json()
      /*parse*/
      setListItems(items)  
    }
    fetchToDos()
  }, [])
  



  return ( 
    <div >
      <h1>To Do List</h1>
      <div>{JSON.stringify(toDoListItems, null, 2)}</div>

    </div>
  );
}

export default App;
