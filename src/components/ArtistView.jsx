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
  } = useFetch(
    `${process.env.REACT_APP_API_DOMAIN}/artist/${artistId}/top?limit=5`
  )

  return (
    <div>
      <div className='artist-view-container'>
        {isArtistError && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isArtistError}
          </div>
        )}
        {artist && !isArtistError && !isPendingArtist ? (
          <ArtistDetails
            artistName={artist.name}
            numberOfFans={artist.nb_fan}
            imageUrl={artist.picture_xl}
          />
        ) : (
          Spinner()
        )}
        {topTracksError && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {topTracksError}
          </div>
        )}
        {topFiveTracks &&
        topFiveTracks.length &&
        !isPendingTopTracks &&
        !topTracksError ? (
          <TopTracks tracks={topFiveTracks} />
        ) : (
          Spinner()
        )}
      </div>
      {artist ? (
        <AlbumView artistName={artist.name} />
      ) : (
        Spinner()
      )}
    </div>
  )
}

export default ArtistView
