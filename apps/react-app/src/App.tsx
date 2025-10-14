import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './base.css'
import Navigation from './Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container stack">
      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Library</h1>
      <div className="card">
                  <button className="btn btn-md btn-primary" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
                <Navigation />
    </div>
  )
}

export default App
