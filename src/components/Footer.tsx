import { Box, Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex
    w='full'
    background='gray.100'
    borderTop='gray.500'
    borderWidth='1px'
    borderBottom='gray.500'
    justify='center'>
    <Flex
      maxW='60rem'
      px='1rem'
      justify='center'
      as='footer'
      py='8rem'
      {...props}
    />
  </Flex>
)
