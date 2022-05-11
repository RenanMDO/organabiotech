import Head from 'next/head'
import { Contact } from '../components/Contact'
import { HeroSection } from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import { Services } from '../components/solutions'
import { VideoSection } from '../components/VideoSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Organa Biotech</title>
      </Head>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <VideoSection />
      <Services />
      <Contact />
    </>
  )
}
