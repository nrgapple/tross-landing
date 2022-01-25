import {
  Flex,
  Heading,
  Spacer,
  VStack,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react'
import { Section } from './Section'

export const AboutSection = () => {
  return (
    <Section>
      <Heading>About Us</Heading>
      <HStack flexDir={{ base: 'column', md: 'row' }}>
        <Text textAlign={'start'} p='10'>
          Tross was founded by a team of Software Engineers who noticed large
          inefficiencies in the tech world. One of the things we discovered is
          how many tools there are out there for building applications.
        </Text>
        <Image w='300px' src='images/options.svg' />
      </HStack>
      <HStack flexDir={{ base: 'column-reverse', md: 'row' }}>
        <Image w='300px' src='images/factory.svg' />

        <Text textAlign={'start'} p='10'>
          When cars were first going mainstream and built for the masses, each
          car had their own set of tools and parts. Even car mechanics had their
          own reasons for why certain parts were better than others, but at the
          end of the day this lead to extreme inefficiencies. We noticed a
          similar pattern in the tech space. There are thousands of tools,
          libraries, frameworks and languages for building web applications,
          software developers are often strongly opinionated as to why some
          tools are better than others and at the end of the day, it is one of
          the main reasons why it takes so long for apps to be build.
        </Text>
      </HStack>
      <HStack flexDir={{ base: 'column', md: 'row' }}>
        <Text textAlign={'start'} p='10'>
          Our secret sauce is <strong>standardization</strong>. Our qualified
          team has put together a tech stack that we see as the holy grail. We
          call it the <strong>Tross Engine</strong> which is a set of tools we
          have come to agreement are the best possible choices for building web
          applications. This allows us to focus and master a small amount of
          tools for fast, high quality development.
        </Text>
        <Image w='300px' src='images/standard.svg' />
      </HStack>
    </Section>
  )
}
