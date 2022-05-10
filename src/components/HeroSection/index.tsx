import { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';
import Typewriter from 'typewriter-effect';


export function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={require('../../assets/videos/video.mp4')} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Organa Biotech</HeroH1>
        <HeroH1>Soluções ambientais</HeroH1>
        <HeroP>Soluções para os resíduos orgânicos:
          <Typewriter
            options={{
              strings: ['Agenda ESG', 'Economia Circular', 'Resíduos Orgânicos Industriais e Comerciais', 'Compostagem in situ.', 'Marketing Verde', 'Redução de CO₂', 'Compostagem acelerada'],
              autoStart: true,
              loop: true,
            }}
          />
        </HeroP>
        <HeroBtnWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true} smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            Entre em contato {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}