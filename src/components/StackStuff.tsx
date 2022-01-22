import { ReactElement, ReactNode } from 'react'
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Flex,
  Image,
  HStack,
  keyframes,
} from '@chakra-ui/react'

/**
 * Thanks to https://worldvectorlogo.com/ for the svg logos.
 */

function StackWrapper({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <Box
      w='full'
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      <Box py={4} px={12}>
        <Text fontWeight='500' fontSize='2xl'>
          {title}
        </Text>
      </Box>
      <HStack w='full' bg='gray.100' py={4} borderBottomRadius={'xl'}>
        <HStack w='full' spacing={3} textAlign='start' px={12}>
          {children}
        </HStack>
      </HStack>
    </Box>
  )
}

const StackItem = ({
  children,
  icon,
}: {
  children: ReactNode
  icon: ReactElement
}) => (
  <VStack w='full'>
    <Flex
      w={16}
      h={16}
      align={'center'}
      justify={'center'}
      color={'white'}
      rounded={'full'}
      bg={'gray.100'}
      mb={1}>
      {icon}
    </Flex>
    <Text fontSize='xl'>{children}</Text>
  </VStack>
)

StackWrapper.defaultProps = {
  title: 'SEO Optimized Frontend',
}

const engineMove = keyframes`
    0%, 100%{
      transform: translateY(1px);
    }
    50% {
      transform: translateY(-1px);
    }
  `

export const StackStuff = ({ subheading }: { subheading?: string }) => {
  return (
    <Flex justify='center' w='full'>
      <Box py={12} maxW='60rem' px='1rem' w='full'>
        <VStack spacing={2} textAlign='center'>
          <HStack>
            <Heading as='h1' fontSize={{ base: '3xl', md: '4xl' }}>
              The Tross® Engine
            </Heading>
            <Image
              animation={`${engineMove} infinite .3s ease`}
              h='50px'
              src='/images/car-engine.png'
            />
          </HStack>
          <Text fontSize='lg' color={'gray.600'}>
            {subheading}
          </Text>
        </VStack>
        <VStack
          w='full'
          direction={{ base: 'column', md: 'row' }}
          textAlign='center'
          justify='center'
          spacing={{ base: 4, lg: 10 }}
          py={10}>
          <StackWrapper title='SEO Optimized Frontend'>
            <StackItem icon={<Image src='/images/next-js.svg' />}>
              NextJs
            </StackItem>
            <StackItem icon={<Image src='/images/graphql.svg' />}>
              Graphql
            </StackItem>
            <StackItem icon={<Image src='/images/next-auth.png' />}>
              NextAuth
            </StackItem>
          </StackWrapper>
          <StackWrapper title='Lightweight Scalable Backend'>
            <StackItem icon={<Image src='/images/aws-lambda-1.svg' />}>
              NextApi
            </StackItem>
            <StackItem icon={<Image src='/images/prisma-3.svg' />}>
              Prisma
            </StackItem>
            <StackItem icon={<Image src='/images/postgresql.svg' />}>
              PostgreSQL
            </StackItem>
          </StackWrapper>
        </VStack>
      </Box>
    </Flex>
  )
}

StackStuff.defaultProps = {
  subheading: 'A Stack for Fail Fast Oriented Start Ups',
}
