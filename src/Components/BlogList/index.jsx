import React from 'react'

const BlogList = ( { blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList