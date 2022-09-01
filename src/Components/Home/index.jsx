import React from 'react'

const Home = () => {
  const handleClick =  () => {
    console.log("hello")
  }
  return (
    <div className='home'>
      <h1>Home</h1>
      <button onClick={handleClick}>Click</button></div>
  )
}

export default Home