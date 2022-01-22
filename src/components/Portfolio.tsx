import { VStack, Heading, Text, Image, Flex } from '@chakra-ui/react'
import WithSpeechBubbles from './Bubbles'

export const Portfolio = () => {
  return (
    <Flex w='full' justify='center'>
      <VStack maxW='60rem' px='1rem'>
        <Heading fontSize={{ base: '3xl', md: '4xl' }}>
          Trusted Partners
        </Heading>
        <Text fontSize='lg' color='gray.600' pb='10'>
          Referican is a trusted partner
        </Text>
        <Image rounded='lg' src='/images/referican.jpeg' shadow='dark-lg' />
        <WithSpeechBubbles />
      </VStack>
    </Flex>
  )
}
