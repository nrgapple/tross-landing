import { AboutSection } from '../../components/About'
import { Container } from '../../components/Container'
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
      </Main>
    </Container>
  )
}
