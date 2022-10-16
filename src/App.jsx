import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex justify-center bg-black text-white">
      <div className='lg:w-2/3 grid place-items-center h-screen'>
        <h1 className='font-8xl font-mono uppercase text-8xl hover:text-blue-700 duration-200'>The Khan</h1>
      </div>
    </div>
  )
}

export default App
