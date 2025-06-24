import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <div className="wrapper">
          <header>
            <h1>Find Movies You'll Enjoy Without the Massle</h1>
          </header>
      </div>
    </main>
  )
}

export default App
