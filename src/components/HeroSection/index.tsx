import { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

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
        <HeroH1>Soluções ambientais</HeroH1>
        <HeroP>Soluções para os resíduos orgânicos: <p />
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