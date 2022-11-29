import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Main } from './pages/main/main'
import { Login } from './pages/login'
import { Navbar } from './components/navbar'
import { CreatePost } from './pages/create-post/create-post'
import './App.css'

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
