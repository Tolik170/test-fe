import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { styles } from '~/components/card-with-image/CardWithImage.styles'

const CardWithImage = ({ img, title, description, link, sx = styles }) => {
  return (
    <Box
      component={ link ? Link : Box } sx={ sx.container(link) } target='_blank'
      to={ link }
    >
      <Box component='img' src={ img } sx={ sx.img } />
      
      <Box sx={ sx.textContainer }>
        <Typography sx={ sx.title }>
          { title }
        </Typography>
        <Typography sx={ sx.description }>
          { description }
        </Typography>
      </Box>
    </Box>
  )
}

export default CardWithImage
