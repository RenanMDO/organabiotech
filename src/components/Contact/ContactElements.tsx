import styled from 'styled-components'

type ContactRowProps = {
  imgStart: boolean;
}

export const ContactContainer = styled.div`
background: #44B87C;
`
export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 600px;
  }
  
`
export const ContactRow = styled.div<ContactRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) { 
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
  @media screen and (max-width: 480px) {
    margin-top: 5rem;
    margin-bottom: 5rem;

  }
`

export const ContactText = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px; 
`

export const ButtonContact = styled.a`
  border-radius: 50px;
  background: #4A4A49;
  white-space: nowrap;
  padding:12px 30px;
  color: #fff ;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 15rem;

  &:hover {
  transition: all 0.2s ease-in-out;
  background: #01BF71;
  }
`

export const ContactH2 = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const ContactP = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #000;
`

export const ContactLinks = styled.div`
  max-width: 540px;
  display: flex;                 
	flex-direction: column;
	justify-content: space-between;
  margin-left: auto;
  
`

export const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 1.1;
  padding-bottom: 60px;
  cursor: pointer;
  align-items: center;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 1rem;
    font-size: 2rem;
  }

  &:hover {
    color: #fff;
    transition: 0.3s ease-out
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
    padding-bottom: 10px;
  }
`

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  
`

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  display: grid;
  
`