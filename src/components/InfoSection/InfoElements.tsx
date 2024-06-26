import styled from 'styled-components'

type InfoContainerProps = {
  lightBg: boolean;
}

type InfoRowProps = {
  imgStart: boolean;
}

type HeadingProps = {
  lightText: boolean;
}

type SubtitleProps = {
  darkText: boolean;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#4A4A49')};

  @media screen and (max-width: 768px) {
  padding: 5rem 0;
  }
`

export const Infowrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div<InfoRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) { 
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const Column2 = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-bottom: 5px;
 
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

export const MarginContainer = styled.div`
  margin-top: 80px;
`
