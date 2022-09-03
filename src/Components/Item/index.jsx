import { NavLink } from 'react-router-dom'

const Item = ({ path, title, author, body, date }) => {

  return (
    <div>
    <div className='blog-preview'>
          <NavLink to={`/blogs/${path}`}>
          <h1>{title}</h1>
          <h2>{author}</h2>
        <p className='dateText'>{date}</p>
          </NavLink>
          </div>
          </div>
  )
}

export default Item