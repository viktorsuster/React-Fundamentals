import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogList = ( { blogs, title, handleDelete }) => {
  return (
    <div>
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <NavLink to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default BlogList