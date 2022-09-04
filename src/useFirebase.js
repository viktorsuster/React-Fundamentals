import { useState, useEffect } from "react"
import { ref, onValue } from "firebase/database"
import { useParams } from 'react-router-dom'

const useFirebase = (url) => {

  const [blog, setBlog] = useState([])
  const {id} = useParams()

  //read from db
  useEffect(() => {
    onValue(ref(url, 'blog/' + `${id}`), (snapshot) => {
      setBlog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((blog) => {
          return setBlog((prev) => [...prev, blog])
        }
      );
  }})
  }, [])

  return { blog, id }

}


export default useFirebase