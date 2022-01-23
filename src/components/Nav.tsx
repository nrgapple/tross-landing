import { Flex, Heading, HStack, Text, keyframes, Link } from '@chakra-ui/react'
import theme from '../theme'
import { TrossLogo } from './TrossLogo'
import NextLink from 'next/link'

export const Nav = () => {
  const color1 = theme.colors.brand[600]
  const color2 = theme.colors.brand[100]

  const logoColor = keyframes`
    0%, 100%{
      color: ${color1};
    }
    50% {
      color: ${color2};
    }
  `

  return (
    <Flex w='full' justify='center'>
      <HStack
        maxW='60rem'
        px='1rem'
        h='auto'
        p='2'
        align='center'
        justify='flex-start'
        spacing={10}
        w='full'>
        <HStack>
          <TrossLogo
            color={color1}
            animation={`${logoColor} infinite 5s linear`}
            w={{ base: '70px', sm: '100px' }}
            h={{ base: '70px', sm: '100px' }}
            viewBox='0 0 500 500'
          />
          <Heading color='brand.600'>
            <Text
              as={'span'}
              position={'relative'}
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
              Tross
            </Text>
          </Heading>
        </HStack>
        <NextLink href={'/about'} passHref>
          <Link>About</Link>
        </NextLink>
      </HStack>
    </Flex>
  )
}
