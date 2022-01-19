import { Text, Heading } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { TeamBlock } from '../components/TeamBlock'
import { TechStack } from '../components/TechStack'
import { Nav } from '../components/Nav'
import { Portfolio } from '../components/Portfolio'

const Index = () => (
  <Container>
    <Main>
      <Nav />
      <section>
        <Heading
          fontSize='7xl'
          bgClip='text'
          bgGradient='linear(to-l, #7928CA, #FF0080)'>
          Build Maintainable Apps <u>Now</u>, Not Tomorrow
        </Heading>
        <Text>
          Our goal is to work on removing the inefficiencies within the tech
          space. Similar to how websites progressed into a point where they can
          quickly be launched and hosted, with modern technical stacks, we see
          web-apps moving in that direction.
        </Text>
      </section>
      <section>
        <TechStack />
      </section>
      <section>
        <TeamBlock />
      </section>
      <section>
        <Portfolio />
      </section>
      <Footer>
        Copyright © {new Date().getFullYear()} Tross, LLC. All rights reserved.
      </Footer>
    </Main>
  </Container>
)

export default Index
