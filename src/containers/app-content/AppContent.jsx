import Box from '@mui/material/Box'

import { styles } from '~/containers/app-content/AppContent.styles'
import AppRouter from '~/routes/routes'

const AppContent = () => {

  return (
    <Box sx={ styles.container }>
      <AppRouter />
    </Box>
  )
}

export default AppContent
