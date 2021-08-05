import React, { useState } from 'react'
import axios from 'axios'


const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // Our code will go here
  }, [])


  return (
    <div className="home">
      <div className="header">
        <h1>Library Managent</h1>
        <p className="subheader">Honest, unbiased book reviews. Share your experience.</p>
      </div>
      <div className="grid">
        BOOK GOES HERE
      </div>
    </div>
  )
}

export default Books