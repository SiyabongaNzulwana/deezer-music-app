import ArtistDetails from './ArtistDetails'
import TopTracks from './TopTracks'
import useFetch from './utils/useFetch'
import { useParams } from 'react-router-dom'

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
    <div className='artist-view-container'>
      {isArtistError && <div>{isArtistError}</div>}
      {isPendingArtist && <div> Loading Artist...</div>}
      {artist ? (
        <ArtistDetails artistName={artist.name} numberOfFans={artist.nb_fan} />
      ) : (
        <p>No artist found with that ID</p>
      )}

      {topTracksError && <div>{topTracksError}</div>}
      {isPendingTopTracks && <div> Loading Top Tracks...</div>}

      {topFiveTracks ? (
        <TopTracks tracks={topFiveTracks} />
      ) : (
        <p>No top tracks found for that artist.</p>
      )}
    </div>
  )
}

export default ArtistView
