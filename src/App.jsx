import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Contador React</h1>
      <p>Valor actual: {count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(0)}>Reiniciar</button>
      </div>
    </div>
  );

}

export default App
