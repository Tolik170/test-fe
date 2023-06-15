import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import CardWithImage from '~/components/card-with-image/CardWithImage'

import { styles } from '~/containers/home/Branches.styles'
import { cardsMock } from '~/containers/home/constants'

const Branches = () => {
  const cards = cardsMock.map((item, index) => (
    <CardWithImage
      description={ item.description } img={ item.img } key={ index }
      link={ item.link } title={ item.title }
    />
  ))
  return (
    <Box sx={ styles.container }>
      <Box sx={ styles.titleWithDescription }>
        <Typography sx={ styles.sectionTitle }>What We`ve Done</Typography>
        <Typography sx={ styles.sectionDescription }>Explore and Engage with Our Projects</Typography>
      </Box>

      <Box sx={ styles.cardsContainer }>
        { cards }
      </Box>

      <Box sx={ styles.quoteContainer }>
        <Box
          component='img'
          src='https://icapgroupgmbh.com/static/media/quote-svgrepo-com.3aab7c5625d9ee7a4e04372c1b9602f9.svg'
          sx={ styles.quoteImg }
        />

        <Typography sx={ styles.quoteTitle }>
          Opportunities don`t happen, you create them.
        </Typography>
        <Typography sx={ styles.quoteDescription }>
          — Chris Grosser
        </Typography>
      </Box>
    </Box>
  )
}

export default Branches
