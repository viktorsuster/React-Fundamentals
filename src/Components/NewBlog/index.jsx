/* eslint-disable no-useless-concat */
import React, {useState} from 'react'
import {db} from "../../firebase"
import {v4} from 'uuid'
import {ref, set} from "firebase/database"
import { useNavigate } from 'react-router-dom'

const NewBlog = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const uuid = v4()
    set(ref(db, 'blog/' + `/${uuid}`), {
      ID: uuid,
      title: title,
      body: body,
      author: author,
      date: new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
    })
    navigate("/")
  }
  
  return (
    <div className='new-blog'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               />
        <label>Blog body:</label>
        <textarea 
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               >
        </textarea>
        <label>Blog author:</label>
        <input type="text"
               required
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
               />
        <button >Add blog</button>
      </form>
    </div>
  )
}

export default NewBlog