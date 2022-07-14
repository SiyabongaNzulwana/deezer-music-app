import { useState } from 'react'
import TrackListView from './TrackListView'
import useFetch from './utils/useFetch'

const SearchBar = () => {
  const [searchString, setSearchString] = useState('')

  const {
    data: tracks,
    isPending,
    error
  } = useFetch(`http://localhost:8000/tracks`)

  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <form className='form-inline mx-auto'>
          <input
            className='form-control mr-sm-2 '
            type='search'
            value={searchString}
            placeholder='Search'
            aria-label='Search'
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>
      </nav>

      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {searchString.length >= 3 &&
        tracks &&
        tracks.map((track) => (
          <ul key={track.id} className='cards'>
            <TrackListView
              imageUrl={track.artist.picture}
              title={track.title}
              duration={track.duration}
              artistName={track.artist.name}
              albumName={track.album.title}
            />
          </ul>
        ))}
    </div>
  )
}

export default SearchBar
