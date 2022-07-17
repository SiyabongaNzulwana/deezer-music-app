const ArtistDetails = ({ artistName, numberOfFans, imageUrl }) => {
  return (
    <div className="artist-details" style={{backgroundImage: 'url(' + imageUrl + ')', backgroundPosition: 'center'}}>
      <div>
        <h2 className="artist-title-name">{artistName}</h2>
        <p className="fan-count"><strong>{numberOfFans >= 1000 ? `${Math.floor(numberOfFans / 1000)}k` : numberOfFans}</strong> fans</p>
      </div>
      <p className="artist-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default ArtistDetails
