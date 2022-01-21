import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { TeamBlock } from '../components/TeamBlock'
import { Nav } from '../components/Nav'
import { Portfolio } from '../components/Portfolio'
import { StackStuff } from '../components/StackStuff'
import { Hero } from '../components/Hero'

const Index = () => (
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
        <Portfolio />
      </section>
      <Footer>
        Copyright © {new Date().getFullYear()} Tross, LLC. All rights reserved.
      </Footer>
    </Main>
  </Container>
)

export default Index
