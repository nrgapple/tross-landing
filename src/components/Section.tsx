import { Flex, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w='full' justify='center'>
      <VStack maxW='60rem' px='1rem'>
        {children}
      </VStack>
    </Flex>
  )
}
