import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { TeamBlock } from '../components/TeamBlock'
import { Nav } from '../components/Nav'
import { Portfolio } from '../components/Portfolio'
import { StackStuff } from '../components/StackStuff'
import { Hero } from '../components/Hero'
import { ContactSection } from '../components/ContactSection'
import { Service } from '../components/Service'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '../utils/gs'

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Container>
      <Main>
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <Service />
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
        <section id='contact'>
          <ContactSection />
        </section>
        <Footer>
          Copyright © {new Date().getFullYear()} Tross, LLC. All rights
          reserved.
        </Footer>
      </Main>
    </Container>
  )
}

export default Index
