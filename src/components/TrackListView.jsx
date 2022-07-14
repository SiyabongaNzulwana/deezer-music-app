import Tilt from 'react-parallax-tilt';

const TrackListView = ({
  imageUrl,
  title,
  duration,
  artistName,
  albumName
}) => {
  return (
    <Tilt>
    <div className='card' style={{ width: '14rem' }}>
      <img src={imageUrl} alt='' width={222} height={222}/>
      <div>
        <p className="test">{title}</p>
        <p className="test">{duration}</p>
        <p className="test">By {artistName}</p>
        <p className="test">{albumName}</p>
      </div>
    </div>
    </Tilt>
  )
}

export default TrackListView
