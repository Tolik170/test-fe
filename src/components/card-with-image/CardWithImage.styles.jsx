import { commonShadow, commonHoverShadow } from '~/styles/app-theme/custom-shadows'

export const styles = {
  container: (link) => ({
    maxWidth: '300px', 
    width: '100%', 
    textAlign: 'left', 
    textDecoration: 'none', 
    backgroundColor: 'basic.white',
    boxShadow: commonShadow,
    borderRadius: '5px',
    '&:hover': link && {
      transition: 'transform 0.2s ease-in-out',
      boxShadow: commonHoverShadow,
      cursor: 'pointer',
      transform: 'scale(1.01)'
    }
  }),
  img: {
    maxWidth: '300px', 
    width: '100%',  
    aspectRatio: '4/3',
    borderTopLeftRadius: '5px', 
    borderTopRightRadius: '5px' 
  },
  textContainer: { p: '15px' },
  title: {
    backgroundColor: '#4b4bff', 
    color: 'basic.white', 
    p: '5px', 
    display: 'inline', 
    borderRadius: '3px' ,
    typography: 'caption'
  }, 
  description: { 
    color: 'primary.700', 
    typography: 'subtitle2', 
    mt: '15px',  
    textDecoration: 'none' 
  }
}
