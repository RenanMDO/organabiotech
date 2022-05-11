import styled from 'styled-components'

export const VideoContainer = styled.div`
  color: #fff;
  background: #32bf70;


  @media screen and (max-width: 768px) {
  padding: 5rem 0;
  }
`

export const VideoWrap = styled.div`
  
  padding: 0 15px;
  
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`
export const VideoRol = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Video = styled.video`
  margin: 50px 0 50px 0;
  width: max-content;
  @media screen and (max-width: 480px) {
    max-width: 320px;
    margin: 10px 0 10px 0;
  }
`

export const TextVideo = styled.h1`
  margin-bottom: 24px;
  padding-top: 32px;
  font-size: 32px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: #4A4A49;
  display: flex;
  align-items: center;
  justify-content: center;
`
