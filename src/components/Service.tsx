import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { StackItem, StackWrapper } from './StackStuff'

export const Service = () => {
  return (
    <VStack>
      <Heading>Our Service</Heading>
      <HStack flexDir={{ base: 'column', md: 'row' }} spacing={10}>
        <Box>
          <StackWrapper title='Quality MVP'>
            <StackItem>
              <Text>Hello</Text>
            </StackItem>
          </StackWrapper>
        </Box>
        <Box>
          <StackWrapper title='Quality MVP'>
            <StackItem>
              <Text>Hello</Text>
            </StackItem>
          </StackWrapper>
        </Box>
        <Box>
          <StackWrapper title='Quality MVP'>
            <StackItem>
              <Text>Hello</Text>
            </StackItem>
          </StackWrapper>
        </Box>
      </HStack>
    </VStack>
  )
}
