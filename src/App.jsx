import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'

import AppContent from '~/containers/app-content/AppContent'

import { theme } from '~/styles/app-theme/custom-mui.styles'

const App = () => {

  return (
    <ThemeProvider theme={ theme }>
      <Box>
        <AppContent />
      </Box>
    </ThemeProvider>
  )
}

export default App
