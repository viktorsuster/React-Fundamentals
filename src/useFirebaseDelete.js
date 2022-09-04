import { ref, remove } from "firebase/database"
import { useNavigate } from 'react-router-dom'

const useFirebaseDelete = (url) => {
  const navigate = useNavigate()

  const handleDelete = (id) => {
    remove(ref(url, 'blog/' + `${id}`))
    navigate("/")
}

  return { handleDelete }

}


export default useFirebaseDelete