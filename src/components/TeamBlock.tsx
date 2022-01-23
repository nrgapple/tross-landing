import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Ticker from 'react-ticker'

export const TeamBlock = ({ title }: { title: string }) => {
  return (
    <Box
      spacing={5}
      background='gray.100'
      borderTop='gray.500'
      borderWidth='1px'
      borderBottom='gray.500'>
      <Heading pt='2rem' fontSize={{ base: '3xl', md: '4xl' }}>
        {title}
      </Heading>
      <Text color='gray.800'>
        It can take companies years and a large chunk of resources to put
        together a qualified team of developers to get a functional MVP up. We
        put up high quality MVPs in a short amount of time and for a fraction of
        the price. Any issues can be resolved via our 24/7 support team and if
        you'd want additional features added we're just one request away.
      </Text>
      <Box pt={9}>
        <Ticker speed={4}>
          {({ index }) => (
            <HStack>
              <CarouselText>{'Devops'}</CarouselText>
              <CarouselText>{'Specialized Engineers (FE & BE)'}</CarouselText>
              <CarouselText>{'Project Managers'}</CarouselText>
              <CarouselText>{'Tech Leads'}</CarouselText>
            </HStack>
          )}
        </Ticker>
      </Box>
      <Box py='2rem'>
        <Ticker speed={2}>
          {({ index }) => (
            <HStack>
              <CarouselText isCheck>{'Easily Maintainable'}</CarouselText>
              <CarouselText isCheck>{'Low hosting costs'}</CarouselText>
              <CarouselText isCheck>{'High quality'}</CarouselText>
              <CarouselText isCheck>{'Speedy Development'}</CarouselText>
            </HStack>
          )}
        </Ticker>
      </Box>
    </Box>
  )
}

const CarouselText = ({
  children,
  isCheck = false,
}: {
  children: ReactNode
  isCheck?: boolean
}) => {
  return (
    <HStack w='auto' px='2' spacing='3'>
      {isCheck ? (
        <CheckIcon color='green.300' />
      ) : (
        <CloseIcon color='red.300' />
      )}
      <Text
        _hover={{ color: 'black' }}
        color='gray.400'
        whiteSpace={'nowrap'}
        fontWeight='bolder'
        fontSize='3xl'
        cursor={'default'}>
        {children}
      </Text>
    </HStack>
  )
}

TeamBlock.defaultProps = {
  title: 'Focus on your Business, Let us Handle your Tech',
}
