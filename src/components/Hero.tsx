import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Section } from './Section'

export const Hero = () => (
  <Section>
    <Heading
      as='h1'
      fontSize={{ base: '5xl', lg: '8xl' }}
      fontWeight='extrabold'>
      Apps{' '}
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
      Our goal is to remove the necessity for businesses to have large,
      expensive tech teams for building and maintaining their applications.
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
  </Section>
)
