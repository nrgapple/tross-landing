import { Flex, VStack } from '@chakra-ui/react'
import { Contact } from './Contact'

export const ContactSection = () => {
  return (
    <Flex w='full' justify='center'>
      <VStack maxW='60rem' px='1rem' w='full'>
        <Contact />
      </VStack>
    </Flex>
  )
}
