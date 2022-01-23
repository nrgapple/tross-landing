import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { TeamBlock } from '../components/TeamBlock'
import { Nav } from '../components/Nav'
import { Portfolio } from '../components/Portfolio'
import { StackStuff } from '../components/StackStuff'
import { Hero } from '../components/Hero'
import { ContactSection } from '../components/ContactSection'
import { useRouter } from 'next/router'
import { Text, VStack } from '@chakra-ui/react'
import { Service } from '../components/Service'

const Index = () => {
  return (
    <Container>
      <Main>
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <StackStuff />
        </section>
        <section>
          <TeamBlock />
        </section>
        <section>
          <Service />
        </section>
        <section>
          <Portfolio />
        </section>
        <section id='contact'>
          <ContactSection />
        </section>
        <Footer>
          <VStack>
            <Text>+1 (732) 814-3113</Text>
            <Text>
              Copyright © {new Date().getFullYear()} Tross, LLC. All rights
              reserved.
            </Text>
          </VStack>
        </Footer>
      </Main>
    </Container>
  )
}

export default Index
