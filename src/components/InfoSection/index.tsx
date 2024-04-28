
import Link from 'next/link'
// import { Button } from '../ButtonElements'
import { NavBtn, NavBtnLink } from '../Navbar/NavbarElements'
import { InfoContainer, Infowrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

export function InfoSection({ lightBg, id, imgStart, topLine, lightText, darkText, description, primary, dark, buttonLabel, img, alt, headline }) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Infowrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* <Button
                    primary={primary}
                    dark={dark}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="contact"
                  >{buttonLabel}</Button> */}
                  <NavBtn>
                    <Link href='http://orcamento.organabiotech.com.br/orcamento' passHref>
                      <NavBtnLink href="/http://orcamento.organabiotech.com.br/orcamento" target="_blank">Solicitar Orçamento</NavBtnLink>
                    </Link>
                  </NavBtn>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </Infowrapper>
      </InfoContainer>
    </>
  )
}
