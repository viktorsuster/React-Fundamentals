import { useNavigate } from 'react-router-dom'
import {db} from "../../firebase"
import {ref, remove} from "firebase/database"
import { FaTrash } from 'react-icons/fa';
import useFirebase from '../../useFirebase';

const BlogDetails = () => {
  const navigate = useNavigate()
  const { blog, id } = useFirebase(db)


      const handleDelete = (id) => {
        remove(ref(db, 'blog/' + `${id}`))
        navigate("/")
    }

  return (
    <div className='blog-details'>
    <h2>{blog[1]}</h2>
    <p>{blog[2]}</p>
    <small>{blog[4]}</small>
    <button type='button' onClick={() => handleDelete(id)}>Delete <FaTrash style={{fill: 'white'}} /></button>
    </div>
    
  )
}

export default BlogDetails