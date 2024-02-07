import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState } from 'react'

function App() {
  const sillyIdeas = [
    { id: 1, title: 'Elevator Accusal', description: 'Accuse someone of tooting in an elevator' },
    { id: 2, title: 'Aquarium Fishing', description: 'Bring a fishing pole to an aquarium' },
    { id: 3, title: 'Double Investigation', description: 'Hire two private investigators to investigate each other' },
]

  const [ideas, setIdeas] = useState(sillyIdeas)
  
  // callback functions
  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea(id) {
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }
// debugger;
  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;
