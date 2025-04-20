import Navbar from "./components/Navbar"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from 'react'

export default function App() {

  const [items, setItems] = useState([])

  const clearItems = () => {
      setItems([]);
  }

  const addItem = (newItem) => {
      setItems([...items, newItem])
  }

  const editItem = (selectiveItem) => {
      const input = window.prompt("Update Text:", selectiveItem.text)
      if (input) setItems(
          items.map((current) => (current.id === selectiveItem.id) ? { ...current, text: input } : current)
      )
  }

  const deleteItem = (selectiveItem) => {
      if (window.confirm("Delete this Item?")) {
          setItems(
              items.filter((current) => current.id !== selectiveItem.id)
          )
      }
  }

  return (
      <div className="wrapper bg-dark text-white">
          <Navbar items={items} clearItems={clearItems} />
          <div className="container pt-5">
              <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
                  <Form addItem={addItem} />
                  <List items={items} deleteItem={deleteItem} editItem={editItem} />
              </div>
          </div>
      </div>
  )
}
