import { createTheme } from '@mui/material/styles'

import palette from './app-palette'
import appTypography from './app.typography'

export const theme = createTheme({
  palette,
  typography: appTypography,
})
