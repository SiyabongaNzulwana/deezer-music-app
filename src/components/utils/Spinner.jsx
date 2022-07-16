import { Rings } from 'react-loader-spinner'
const Spinner = () => {
  return (
    <Rings
      color='#fcc1db;'
      height={150}
      width={150}
      ariaLabel='loading'
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  )
}

export default Spinner
