import { Flex, Heading, HStack, Text, VStack, Wrap } from '@chakra-ui/react'
import { Card } from './Card'

export const Service = () => {
  return (
    <Flex w='full' justify='center'>
      <VStack maxW='60rem' px='1rem'>
        <Heading>Our Service</Heading>
        <Wrap pt='5' spacing={'10'} justify={'center'}>
          <Card
            title='High Quality MVP'
            subtitle='The Tross Engine enables us to build high quality MVPs in a short amount of time. Satisfaction guaranteed '
          />
          <Card
            title='24/7 Bug Support'
            subtitle='No longer does your company need to have engineers on support to fix bugs when they show up. Our 24/7 support will handle that for you'
          />
          <Card
            title=' Unlimited Feature Requests'
            subtitle='When you want a new feature on your application, just submit a request and we will add it in for you'
          />
        </Wrap>
      </VStack>
    </Flex>
  )
}
