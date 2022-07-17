import ArtistDetails from './ArtistDetails'
import TopTracks from './TopTracks'
import useFetch from './utils/useFetch'
import { useParams } from 'react-router-dom'
import AlbumView from './AlbumView'
import Spinner from './utils/Spinner'


const ArtistView = () => {
  const { artistId } = useParams()

  const {
    data: artist,
    isPending: isPendingArtist,
    error: isArtistError
  } = useFetch(`${process.env.REACT_APP_API_DOMAIN}artist/${artistId}`)

  const {
    data: topFiveTracks,
    isPending: isPendingTopTracks,
    error: topTracksError
  } = useFetch(`${process.env.REACT_APP_API_DOMAIN}/artist/${artistId}/top?limit=5`)

  return (
    <div className="artist-view-container-root">
      <div className='artist-view-container'>
        { isArtistError && <div style={{ display: 'flex', justifyContent: 'center' }}> { isArtistError } </div> }
        { isPendingArtist && Spinner(isPendingArtist) }
        {artist && 
          <ArtistDetails
            artistName={artist.name}
            numberOfFans={artist.nb_fan}
            imageUrl={artist.picture_xl}
          />
        }
        { topTracksError && <div style={{ display: 'flex', justifyContent: 'center' }} >{topTracksError}</div> }
        { isPendingTopTracks && Spinner(isPendingTopTracks) }
        { topFiveTracks && <TopTracks tracks={topFiveTracks} /> }
      </div>
      { artist && <AlbumView artistName={artist.name} /> }
    </div>
  )
}

export default ArtistView
