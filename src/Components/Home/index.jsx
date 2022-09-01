import React, {useState} from 'react'
import BlogList from '../BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Viktor", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "Peter", id: 2 },
    { title: "Ou yeah", body: "lorem ipsum...", author: "Jacob", id: 3 }
  ])
  return (
    <div className='home'>
      <BlogList blogs={blogs} />
      </div>
  )
}

export default Home