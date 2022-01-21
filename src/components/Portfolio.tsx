import { VStack, Heading, Text, Image, Flex } from '@chakra-ui/react'

export const Portfolio = () => {
  return (
    <Flex w='100%' justify='center'>
      <VStack maxW='60rem' px='1rem'>
        <Heading>Trusted Partners</Heading>
        <Text fontSize='lg' color='gray.600' pb='10'>
          Referican is a trusted partner
        </Text>
        <Image rounded='lg' src='/images/referican.jpeg' shadow='dark-lg' />
      </VStack>
    </Flex>
  )
}
