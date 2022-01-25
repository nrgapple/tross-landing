import { Heading, Text, VStack } from '@chakra-ui/react'

interface CardProps {
  title: string
  subtitle: string
}
export const Card = ({ title, subtitle }: CardProps) => {
  return (
    <VStack
      maxW='250px'
      w='full'
      border={'1px'}
      borderColor={'gray.500'}
      rounded={'md'}
      p='5'
      align='flex-start'>
      <Heading textAlign={'start'} fontSize={'xl'}>
        {title}
      </Heading>
      <Text pt='2' textAlign={'start'} color={'gray.600'}>
        {subtitle}
      </Text>
    </VStack>
  )
}
