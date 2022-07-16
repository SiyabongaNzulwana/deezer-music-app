import { useState } from 'react'
import TrackListView from './TrackListView'
import useFetch from './utils/useFetch'
import Spinner from './utils/Spinner'

const SearchBar = () => {
  const [searchString, setSearchString] = useState('hello')
  const {
    data: tracks,
    isPending,
    error
  } = useFetch(
    `${process.env.REACT_APP_API_DOMAIN}search/track?q=${searchString}`
  )

  return (
    <div className='search-container'>
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

      { error && <div style={{display: 'flex', justifyContent: 'center'}}>{error}</div> }
      {tracks &&
        tracks?.data?.length && !error && !isPending ? 
        tracks.data.map((track) => (
          <ul key={track.id} className='cards'>
            <TrackListView track={track} />
          </ul>
        ))
        : Spinner()
      }
    </div>
  )
}

export default SearchBar
