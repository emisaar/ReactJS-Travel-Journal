import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import './App.css';
import rawData from './data'

function App() {
  const card = rawData.map((props)=>{
    return (
      <div>
        <Card 
          {...props}  
        />
        <hr></hr>
      </div>
    )
  })

  return (
    <div>
      <Nav />
      <div className='cards-container'>
        {card}
      </div>
    </div>
  )
}

export default App;
