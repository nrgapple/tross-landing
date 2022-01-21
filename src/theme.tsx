import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

/**
 * Color Palette: https://colorhunt.co/palette/0000005800ffe900ffffc600
 */
const theme = extendTheme({
  colors: {
    black: '#000000',
    gray: {
      100: '#fafafa',
      500: '#eaeaea',
    },
    brand: {
      100: '#FFC600',
      400: '#E900FF',
      600: '#5800FF',
      900: '#000000',
    },
  },
  fonts,
  breakpoints,
})

export default theme
