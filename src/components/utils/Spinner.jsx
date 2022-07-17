import BounceLoader from 'react-spinners/BounceLoader'
const Spinner = (isPending) => <BounceLoader color={'green'} loading={isPending} size={100} style={{ display: 'flex', justifyContent: 'center' }}/>

export default Spinner
