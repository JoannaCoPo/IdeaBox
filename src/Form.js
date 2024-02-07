import { useState } from 'react';
import './Form.css';

function Form({addIdea}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function sumbitIdeas(event) {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    addIdea(newIdea)
    clearInput()
  }

  function clearInput() {
    setTitle("")
    setDescription("")
  }

  return (
    <form>
      <input
        type="text"
        placeholder='Title'
        name='title'
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder='Description'
        name='description'
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={(e) => sumbitIdeas(e)}>SUBMIT</button>
    </form>
  )
}

export default Form;
