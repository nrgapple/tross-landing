import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing='10rem'
    width='100%'
    maxWidth='48rem'
    px='1rem'
    textAlign='center'
    {...props}
  />
)
