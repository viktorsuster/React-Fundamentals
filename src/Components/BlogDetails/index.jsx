/* eslint-disable no-useless-concat */
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {db} from "../../firebase"
import {ref, onValue, remove} from "firebase/database"

const BlogDetails = () => {
  const [blog, setBlog] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  //read from db
      useEffect(() => {
        onValue(ref(db, 'blog/' + `${id}`), (snapshot) => {
          setBlog([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((blog) => {
              return setBlog((prev) => [...prev, blog])
            }
          );
      }})
      }, [id])

      const handleDelete = (id) => {
        remove(ref(db, 'blog/' + `${id}`))
        navigate("/")
    }

  return (
    <div className='blog-details'>
    <h2>{blog[1]}</h2>
    <p>{blog[2]}</p>
    <small>{blog[4]}</small>
    <button type='button' onClick={() => handleDelete(id)}>Delete</button>
    </div>
    
  )
}

export default BlogDetails