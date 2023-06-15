import Box from '@mui/material/Box'

import Branches from '~/containers/home/Branches'

const Home = () => {

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <Branches />
    </Box>
  )
}

export default Home
