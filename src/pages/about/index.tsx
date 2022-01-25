import { AboutSection } from '../../components/About'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Main } from '../../components/Main'
import { Nav } from '../../components/Nav'

export default function About() {
  return (
    <Container>
      <Main>
        <Nav />
        <section>
          <AboutSection />
        </section>
        <Footer>
          Copyright © {new Date().getFullYear()} Tross, LLC. All rights
          reserved.
        </Footer>
      </Main>
    </Container>
  )
}
