import Spinner from './utils/Spinner'
import convertSecondsToMinutes from '../helpers/convertSeconds'
const TopTracks = ({ tracks }) => {
  return (
    <div className='top-tracks-container'>
      <h3>Top Tracks</h3>
      {tracks && tracks?.data?.length ? (
        tracks?.data?.map((track, index) => (
          <div className='each-track' key={track.id}>
            <span className='top-tracks'>
              <strong className='numbers'>{index + 1}</strong>
              <div className='track-details'>
                <p className='top-track-title'>{track.title}</p>
                <p>{convertSecondsToMinutes(track.duration)}</p>
              </div>
            </span>
          </div>
        ))
      ) : (
        Spinner()
      )}
    </div>
  )
}

export default TopTracks
