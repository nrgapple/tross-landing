import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'

export const TeamBlock = ({ title }: { title: string }) => {
  const settings: Settings = {
    infinite: true,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 1,
    speed: 9000,
    slidesToShow: 3,
    touchMove: false,
    slidesToScroll: 1,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    arrows: false,
    variableWidth: true,
  }
  return (
    <Box
      spacing={5}
      background='gray.100'
      borderTop='gray.500'
      borderWidth='1px'
      borderBottom='gray.500'>
      <Heading pt='5rem' fontSize={{ base: '3xl', md: '4xl' }}>
        {title}
      </Heading>
      <Box pt={5}>
        <Slider {...settings} rtl={true}>
          <CarouselText>{'Devops'}</CarouselText>
          <CarouselText>{'Specialized Engineers (FE & BE)'}</CarouselText>
          <CarouselText>{'Project Managers'}</CarouselText>
          <CarouselText>{'Tech Leads'}</CarouselText>
        </Slider>
      </Box>
      <Box pb='5rem'>
        <Slider {...settings}>
          <CarouselText isCheck>{'Easily Maintainable'}</CarouselText>
          <CarouselText isCheck>{'Low hosting costs'}</CarouselText>
          <CarouselText isCheck>{'High quality'}</CarouselText>
          <CarouselText isCheck>{'Speedy Development'}</CarouselText>
        </Slider>
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
    <HStack px='12px' spacing='3'>
      {isCheck ? (
        <CheckIcon color='green.300' />
      ) : (
        <CloseIcon color='red.300' />
      )}
      <Text
        _hover={{ color: 'black' }}
        color='gray.400'
        fontWeight='bolder'
        fontSize='2xl'>
        {children}
      </Text>
    </HStack>
  )
}

TeamBlock.defaultProps = {
  title: 'Removing Inefficiencies in the Tech Space',
}
