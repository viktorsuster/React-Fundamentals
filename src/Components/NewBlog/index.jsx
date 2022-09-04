/* eslint-disable no-useless-concat */
import {db} from "../../firebase"
import useFirebaseWrite from '../../useFirebaseWrite';

const NewBlog = () => {
  const { title, author, body, setTitle, setAuthor, setBody, handleSubmit } = useFirebaseWrite(db)
  
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