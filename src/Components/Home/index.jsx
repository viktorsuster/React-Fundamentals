import React, {useState} from 'react'

const Home = () => {
  const [name, setName] = useState("Viktor")
  const handleClick =  () => {
    setName("Peter")
  }
  return (
    <div className='home'>
      <h1>Home</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click</button></div>
  )
}

export default Home