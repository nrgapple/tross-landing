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
    <HStack w='auto' px='12px' spacing='3'>
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
        fontSize='3xl'>
        {children}
      </Text>
    </HStack>
  )
}

TeamBlock.defaultProps = {
  title: 'Removing Inefficiencies in the Tech Space',
}
