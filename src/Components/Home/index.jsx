import React, {useState} from 'react'
import BlogList from '../BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Viktor", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "Peter", id: 2 },
    { title: "Ou yeah", body: "lorem ipsum...", author: "Jacob", id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  return (
    <div className='home'>
      <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Viktor")} title="Viktor" />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Peter")} title="Peter" />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Jacob")} title="Jacob" />
      </div>
  )
}

export default Home