import React from 'react'
import { Link } from 'react-router-dom'

function Home() {



  return (
    <div>
        <h1>Home</h1>
        <Link to="/form">form</Link>
        <h1>Task</h1>
        <Link to="/task">task</Link>

    </div>
  )
}

export default Home