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

const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  'xl-600':
    '0 20px 25px -5px rgba(88, 0, 255, 0.1), 0 10px 10px -5px rgba(88, 0, 255, 0.04)',
  'dark-lg-600':
    'rgba(88, 0, 255, 0.1) 0px 0px 0px 1px, rgba(88, 0, 255, 0.2) 0px 5px 10px, rgba(88, 0, 255, 0.4) 0px 15px 40px',
  'lg-600':
    '0 10px 15px -3px rgba(88, 0, 255, 0.1), 0 4px 6px -2px rgba(88, 0, 255, 0.05)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  'dark-lg':
    'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
}

/**
 * Color Palette: https://colorhunt.co/palette/0000005800ffe900ffffc600
 */
const theme = extendTheme({
  shadows,
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
