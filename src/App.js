import {useState, useEffect} from 'react'

function App() {

const [toDoListItems, setListItems] = useState([])

useEffect(() => {
  fetchToDos()
}, [toDoListItems])

const fetchToDos = async() => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const items = await responce.json();
  // const parsedItems =items.parse()
  
  setListItems(...items)
}


  return (
    <div >
      <h1>To Do List</h1>
      <main>{toDoListItems}</main>

    </div>
  );
}

export default App;
