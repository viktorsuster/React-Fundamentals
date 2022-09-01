import React, {useState} from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Viktor", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "Peter", id: 2 },
    { title: "Ou yeah", body: "lorem ipsum...", author: "Jacob", id: 3 }
  ])
  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
        </div>
      ))}
      </div>
  )
}

export default Home