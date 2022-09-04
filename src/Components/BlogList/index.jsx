import {db} from "../../firebase"
import Item from "../Item"
import useFirebaseList from '../../useFirebaseList';

const List = () => {
  const { blog } = useFirebaseList(db)

  return (
    <>
    {blog
             .map((blog) => 
               (<Item 
                key={blog.ID}
                path={blog.ID}
                title={blog.title}
                author={blog.author}
                body={blog.body}
                date={blog.date}
                />
      ))
      }
    </>
  )
}

export default List