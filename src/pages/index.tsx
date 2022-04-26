import styled from 'styled-components'
import { Contact } from '../components/Contact'
import { HeroSection } from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import { Services } from '../components/Services'

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Contact />
    </>
  )
}
