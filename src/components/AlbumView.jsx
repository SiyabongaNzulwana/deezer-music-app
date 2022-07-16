import useFetch from './utils/useFetch'
import Spinner from './utils/Spinner'
const AlbumView = ({ artistName }) => {
  const {
    data: albums,
    isPending,
    error
  } = useFetch(
    `${process.env.REACT_APP_API_DOMAIN}search/album?q=${artistName}&limit=4`
  )

  return (
    <div className='album-container'>
      <div className='album-outer'>
        <div className='album-title'>
          <h6>Albums</h6>
        </div>
        {albums && albums.data.length && !error && !isPending? (
          <div className='album-view'>
            {albums &&
              albums.data.length &&
              albums.data.map((album) => (
                <div key={album.id} className='album'>
                  <img src={album.cover} alt='' width={150} height={150} />
                  <div>
                    <p className='album-details'>{album.title}</p>
                    <p className='album-year'>2018</p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          Spinner()
        )}
      </div>
    </div>
  )
}

export default AlbumView
