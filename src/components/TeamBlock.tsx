import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, Heading, Center } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Ticker from 'react-ticker'

export const TeamBlock = ({ title }: { title: string }) => {
  return (
    <Box
      spacing={5}
      background='gray.100'
      borderTop='gray.500'
      borderWidth='1px'
      borderBottom='gray.100'>
      <Heading pt='2rem' fontSize={{ base: '3xl', md: '4xl' }}>
        {title}
      </Heading>
      <Center w='100%'>
        <Text maxW='700px' color='gray.600'>
          Leave the tech to us. Without the distraction of needing to put
          together a tech team, you'll have more time to focus on scaling your
          business
        </Text>
      </Center>
      <Box pt='14'>
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
              <CarouselText isCheck>{'Easily maintainable'}</CarouselText>
              <CarouselText isCheck>{'Low Hosting Costs'}</CarouselText>
              <CarouselText isCheck>{'High Quality'}</CarouselText>
              <CarouselText isCheck>{'Speedy Development'}</CarouselText>
              <CarouselText isCheck>{'24/7 Support via Slack'}</CarouselText>
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
      {/* {isCheck ? (
        <CheckIcon color='green.300' />
      ) : (
        <CloseIcon color='red.300' />
      )} */}
      <Text
        _hover={{ color: 'black' }}
        color='gray.400'
        whiteSpace={'nowrap'}
        fontSize='3xl'
        fontFamily={'Passion One, cursive'}
        cursor={'default'}>
        {children}
      </Text>
    </HStack>
  )
}

TeamBlock.defaultProps = {
  title: 'Business comes First',
}
