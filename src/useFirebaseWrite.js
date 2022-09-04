import {useState} from 'react'
import {v4} from 'uuid'
import {ref, set} from "firebase/database"
import { useNavigate } from 'react-router-dom'

const useFirebaseWrite = (url) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const uuid = v4()
    set(ref(url, 'blog/' + `/${uuid}`), {
      ID: uuid,
      title: title,
      body: body,
      author: author,
      date: new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
    })
    navigate("/")
  }

  return { title, author, body, setTitle, setAuthor, setBody, handleSubmit }

}


export default useFirebaseWrite