import { useState, useEffect } from "react"
import { ref, onValue } from "firebase/database"

const useFirebaseDetail = (url) => {

  const [blog, setBlog] = useState([])

  //read from db
      useEffect(() => {
        onValue(ref(url, 'blog/'), (snapshot) => {
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

  return { blog }

}


export default useFirebaseDetail