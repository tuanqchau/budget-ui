import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Input: ${inputValue}`);
  };
  
  return (
    <>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
