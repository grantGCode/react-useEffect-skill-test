import { useState, useEffect } from 'react'

function App({ children }) {

  const [toDoListItems, setListItems] = useState([])

  useEffect((data) => {
    fetchToDos()
    console.log(data)
  }, [])

  const fetchToDos = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const items = await responce.json();
    // const parsedItems =items.parse()

    console.log(...items)
  }


  return (
    <div >
      <h1>To Do List</h1>
      <ul>{toDoListItems}</ul>

    </div>
  );
}

export default App;
