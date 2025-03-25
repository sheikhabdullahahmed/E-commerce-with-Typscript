import React from 'react'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar handleShow={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}

export default App