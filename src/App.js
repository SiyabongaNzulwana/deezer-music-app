import './App.css'
import SearchBar from './components/SearchBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArtistView from './components/ArtistView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SearchBar />}></Route>
        <Route path='/artists/:artistId' element={<ArtistView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
