import Home from './Components/Home'
import NewBlog from './Components/NewBlog'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newblog" element={<NewBlog />}/>
      <Route path="/blogs/:id" element={<BlogDetails />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
