import Tilt from 'react-parallax-tilt'
import { Link } from 'react-router-dom'
import convertSecondsToMinutes from '../helpers/convertSeconds'

const TrackListView = ({ track }) => {
  const { id, name, picture } = track.artist
  return (
    <Tilt>
      <div className='card' style={{ width: '14rem' }}>
        <Link to={`/artists/${id}`} state={track.artist}>
          <img src={picture} alt='' width={222} height={222} />
        </Link>
        <div className='track-list-track-details'>
          <p className='track-list-track-title'>{track.title_short}</p>
          <p className='track-list-track-duration'>
            {convertSecondsToMinutes(track.duration)}
          </p>
        </div>
        <div className='track-list-track-artist-album'>
          <p className='track-list-track-by'>By {name}</p>
          <p className='track-list-track-only-album'>{track.album.title}</p>
        </div>
      </div>
    </Tilt>
  )
}

export default TrackListView
