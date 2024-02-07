import { useState } from 'react';
import './App.css';

function App() {
  const sillyIdeas = [
    { id: 1, title: 'Elevator Accusal', description: 'Accuse someone of tooting in an elevator' },
    { id: 2, title: 'Aquarium Fishing', description: 'Bring a fishing pole to an aquarium' },
    { id: 3, title: 'Double Investigation', description: 'Hire two private investigators to investigate each other' },
]

  const [ideas, setIdeas] = useState([sillyIdeas])
 
 return (
  <main className='App'>
    <h1>IdeaBox</h1>
    <p>Hi!</p>
  </main>
 )
}

export default App;
