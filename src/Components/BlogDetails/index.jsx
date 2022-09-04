import {db} from "../../firebase"
import { FaTrash } from 'react-icons/fa';
import useFirebaseDetail from '../../useFirebaseDetail';
import useFirebaseDelete from '../../useFirebaseDelete';

const BlogDetails = () => {
  const { blog, id } = useFirebaseDetail(db)
  const { handleDelete } = useFirebaseDelete(db)

  return (
    <div className='blog-details'>
    <h2>{blog[0]}</h2>
    <strong>{blog[2]}</strong>
    <p>{blog[4]}</p>
    <small>{blog[5]}</small>
    <button type='button' onClick={() => handleDelete(id)}>Delete <FaTrash style={{fill: 'white'}} /></button>
    </div>
    
  )
}

export default BlogDetails