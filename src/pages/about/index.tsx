import { Divider, Heading, Spacer, Text } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import { Main } from '../../components/Main'
import { Nav } from '../../components/Nav'

export default function About() {
  return (
    <Container>
      <Main>
        <section>
          <Nav />
        </section>
        <section>
          <Heading>About Us</Heading>
          <Text>
            Tross was founded by a team of Software Engineers who noticed large
            inefficiencies in the tech world. One of the things we discovered is
            how many tools there are out there for building applications.
            <Spacer py='2' />
            When cars were first going mainstream and built for the masses, each
            car had their own set of tools and parts. Even car mechanics had
            their own reasons for why certain parts were better than others, but
            at the end of the day this lead to extreme inefficiencies. We
            noticed a similar pattern in the tech space. There are thousands of
            tools, libraries, frameworks and languages for building web
            applications, software developers are often strongly opinionated as
            to why some tools are better than others and at the end of the day,
            it is one of the main reasons why it takes so long for apps to be
            build.
            <Spacer py='2' />
            Our secret sauce is <strong>standardization</strong>. Our qualified
            team has put together a tech stack that we see as the holy grail. We
            call it the <strong>Tross Engine</strong> which is a set of tools we
            have come to agreement are the best possible choices for building
            web applications. This allows us to focus and master a small amount
            of tools for fast, high quality development.
          </Text>
        </section>
      </Main>
    </Container>
  )
}
