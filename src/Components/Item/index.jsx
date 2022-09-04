import { NavLink } from 'react-router-dom'
import { FaExpandArrowsAlt } from 'react-icons/fa';

const Item = ({ path, title, author, date }) => {

  return (
    <div>
    <div className='blog-preview'>
          <NavLink to={`/blogs/${path}`}>
          <h1>{title}</h1>
          <h2>{author}</h2>
        <p className='dateText'>{date}</p>
        <div style={{float: 'right',  marginTop: '-60px', display: 'flow'}}>
        <FaExpandArrowsAlt />
        </div>
          </NavLink>
          </div>
          </div>
  )
}

export default Item