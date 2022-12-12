import React, { useState } from 'react'
import App from '../App'

const Offline = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) ?? []
  )

  const onChangeTitle = (event) => setTitle(event.target.value)
  const onChangeDescription = (event) => setDescription(event.target.value)

  const handleClick = (e) => {
    e.preventDefault()
    if (notes && description) {
      const existedNotes = JSON.parse(localStorage.getItem('notes')) ?? []
      const newNotes = [...existedNotes, { title, description }]
      localStorage.setItem('notes', JSON.stringify(newNotes))
      setNotes(newNotes)
      setTitle('')
      setDescription('')
    } else {
      alert('all inputs are required')
    }
  }
  return (
    <App>
      <div>
        <form>
          <label>
            Title:
            <input onChange={onChangeTitle} value={title} />
          </label>
          <label>
            Description:
            <input onChange={onChangeDescription} value={description} />
          </label>
          <button onClick={handleClick}>Add note</button>
        </form>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <h3>note number {index + 1}</h3>
              <div> title: {note.title}</div>
              <div> description: {note.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </App>
  )
}

export default Offline
