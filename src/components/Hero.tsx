import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export const Hero = () => (
  <Flex w='full' justify='center'>
    <VStack maxW='60rem' px='1rem'>
      <Heading as='h1' fontSize='8xl' fontWeight='extrabold'>
        Build Maintainable Apps{' '}
        <Text
          as={'span'}
          position='relative'
          _after={{
            content: "''",
            width: 'full',
            height: '40%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'brand.100',
            zIndex: -1,
          }}>
          Now
        </Text>
        , Not Tomorrow
      </Heading>
      <Text fontSize='lg' color={'gray.600'}>
        Our goal is to work on removing the inefficiencies within the tech
        space. Similar to how websites progressed into a point where they can
        quickly be launched and hosted, with modern technical stacks, we see
        web-apps moving in that direction.
      </Text>
      <Link href={'/#contact'} passHref>
        <Button
          variant='solid'
          shadow='lg-600'
          _hover={{ shadow: 'dark-lg-600' }}
          _active={{
            color: 'gray.500',
            bg: 'brand.600',
          }}
          bg='brand.100'
          as='a'>
          Chat with us
        </Button>
      </Link>
    </VStack>
  </Flex>
)
