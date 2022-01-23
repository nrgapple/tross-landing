import { VStack, Heading, Text, Image, Flex, Box } from '@chakra-ui/react'
import WithSpeechBubbles from './Bubbles'

export const Portfolio = () => {
  return (
    <Flex w='full' justify='center'>
      <VStack maxW='60rem' px='1rem'>
        <Heading fontSize={{ base: '3xl', md: '4xl' }}>
          Trusted Partners
        </Heading>
        <Text fontSize='lg' color='gray.600' pt='10'>
          Referican
        </Text>
        <Box
          as='a'
          href='https://referican.com'
          target={'_blank'}
          cursor={'pointer'}
          _hover={{
            div: {
              opacity: 0.8,
            },
          }}
          pos='relative'>
          <Image rounded='lg' src='/images/referican.jpeg' shadow='dark-lg' />
          <VStack
            opacity={0}
            transition={'opacity 0.6s ease'}
            pos='absolute'
            bottom={0}
            h={'75%'}
            w='100%'
            pb='6'
            justify='flex-end'
            roundedBottom={'lg'}
            bg='linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'>
            <Text as='h3' color={'white'} fontSize='xl'>
              View Referican
            </Text>
          </VStack>
        </Box>
        <WithSpeechBubbles />
      </VStack>
    </Flex>
  )
}
