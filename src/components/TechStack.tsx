import { Center, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react'

export const TechStack = ({ heading }: { heading?: string }) => {
  return (
    <VStack background='brand.500' spacing={5}>
      <Heading p={5}>
        The <strong>Tross®</strong> Engine
      </Heading>
      <VStack w='100%' rounded='xl' shadow='lg' border='thin'>
        <Heading p={5} fontSize='2xl'>
          SEO optimized Frontend
        </Heading>
        <HStack justify='space-around' w='100%' p={5}>
          <TechBox name='/images/nextjs-logo.png' url />
          <TechBox name='/images/graphql-logo.png' url />
          <TechBox name='/images/nextauth-logo.png' url />
        </HStack>
      </VStack>

      <VStack w='100%' rounded='xl' shadow='lg'>
        <HStack justify='space-around' w='100%' p={5}>
          <TechBox name='NextApi' />
          <TechBox name='Prisma' />
          <TechBox name='Postgres' />
        </HStack>
        <Heading p={5} fontSize='2xl'>
          Lightweight Scalable Backend
        </Heading>
      </VStack>
    </VStack>
  )
}

TechStack.defaultProps = { heading: 'SEO Optimized Frontend' }

export const TechBox = ({ name, url }: { name: string; url?: boolean }) => {
  return (
    <Center
      w='200'
      background='white'
      shadow='xl'
      _hover={{ shadow: 'dark-lg' }}
      rounded='lg'>
      {url ? (
        <Image p={5} h='100' src={name} />
      ) : (
        <Text p={5} fontSize='lg'>
          {name}
        </Text>
      )}
    </Center>
  )
}

TechBox.defaultProps = { name: 'Nextjs' }
