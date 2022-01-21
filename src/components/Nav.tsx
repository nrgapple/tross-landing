import { Flex, Heading, HStack, Text } from '@chakra-ui/react'

export const Nav = () => {
  return (
    <Flex w='full' justify='center'>
      <HStack
        maxW='60rem'
        px='1rem'
        h='auto'
        p='2'
        align='center'
        justify='space-between'
        w='full'>
        <Heading color='brand.600'>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '40%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'brand.100',
              zIndex: -1,
            }}>
            Tross
          </Text>
        </Heading>
      </HStack>
    </Flex>
  )
}
