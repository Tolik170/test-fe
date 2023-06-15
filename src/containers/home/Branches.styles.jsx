export const styles = {
  container: {
    backgroundColor: 'backgroundColor', 
    width: '100%', 
    textAlign: 'center', 
    py: '50px'
  },
  titleWithDescription: { mb: '50px' },
  sectionTitle: { typography: 'h4', color: 'primary.800' },
  sectionDescription: { typography: { xs: 'subtitle2', sm: 'subtitle1' }, color: 'primary.700' },
  cardsContainer: { 
    display: 'grid',
    justifyItems: 'center',
    px: '10px',
    gridTemplateColumns: {
      xs: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    flexWrap: 'wrap', 
    gap: '40px 20px' 
  },
  quoteContainer: { position: 'relative', pt: '70px', m: '30px auto 0 auto', width: '60%' },
  quoteImg: { maxWidth: '60px', position: 'absolute', top: 0, right: 0 },
  quoteTitle: { typography: 'midTitle', color: 'primary.800' },
  quoteDescription: { typography: 'body1', color: '#4b4bff', mt: '10px' }
}
