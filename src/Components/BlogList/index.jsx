import React, {useState, useEffect} from "react"
import {db} from "../../firebase"
import {ref, onValue} from "firebase/database"
import Item from "../Item"

const List = () => {
  const [blog, setBlog] = useState([])

  //read from db
      useEffect(() => {
        onValue(ref(db, 'blog/'), (snapshot) => {
          setBlog([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((blog) => {
              return setBlog((prev) => [...prev, blog]
              .sort((a, b) => 
               new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).reverse())
              });
      }})
      }, [])
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