import { VStack, Heading, Text, Image } from '@chakra-ui/react'

export const Portfolio = () => {
  return (
    <VStack>
      <Heading>Trusted Partners</Heading>
      <Text color='gray.400' pb='10'>
        Referican is a trusted partner
      </Text>
      <Image rounded='lg' src='/images/referican.jpeg' shadow='dark-lg' />
    </VStack>
  )
}
