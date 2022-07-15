import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom"

const TrackListView = ({ track }) => {
  const { id, title, name, picture } = track.artist
  return (
    <Tilt>
    <div className='card' style={{ width: '14rem' }}>
      <Link to={`/artists/${id}`} state={track.artist}>
        <img src={picture} alt='' width={222} height={222}/>
      </Link>
      
      <div>
        <p className="test">{title}</p>
        <p className="test">{track.duration}</p>
        <p className="test">By {name}</p>
        <p className="test">{track.album.title}</p>
      </div>
    </div>
    </Tilt>
  )
}

export default TrackListView
