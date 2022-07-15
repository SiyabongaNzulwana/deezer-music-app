import './App.css'
import SearchBar from './components/SearchBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArtistView from './components/ArtistView'

function App() {
  return (
    < div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SearchBar />}></Route>
        <Route exact path='/artists/:artistId' element={<ArtistView />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
