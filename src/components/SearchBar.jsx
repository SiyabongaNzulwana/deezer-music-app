import { useState } from 'react'
import TrackListView from './TrackListView'
import useFetch from './utils/useFetch'
import Spinner from './utils/Spinner'
import logo from '../deezerLogo.png'
const SearchBar = () => {
  const [searchString, setSearchString] = useState('')
  const {
    data: tracks,
    isPending,
    error
  } = useFetch(
    `${process.env.REACT_APP_API_DOMAIN}search/track?q=${searchString}`, searchString
  )

  return (
    <div className='search-container'>
      <nav className='navbar navbar-light bg-light'>
        {/* <img src={'/assets/images/deezerLogo.png'} alt='' width={100} height={50}/> */}
        <img src={logo} alt="logo" width={100} height={50}/>
        <form className='form'>
          <input
            className='search-input'
            type='search'
            value={searchString}
            placeholder='Search tracks...'
            aria-label='Search'
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>
      </nav>

      {error && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>{error}</div>
      )}
      {isPending && (Spinner(isPending))}
      {tracks &&
        tracks?.data?.length &&
        tracks.data.map((track) => (
          <ul key={track.id} className='cards'>
            <TrackListView track={track} />
          </ul>
        ))}
    </div>
  )
}

export default SearchBar
