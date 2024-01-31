import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../component/CreateTodo'


function App() {
  const [count,useCount] = useState(0)
  return (
    <div>
      <count>{count}</count>
      <CreateTodo />
          </div>
  )
}

export default App
