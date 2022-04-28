import styled from 'styled-components'

export const BlogMain = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 2rem;
`
export const BlogDiv = styled.div`
  max-width: 720px;
  margin: 5rem auto 0;
`

export const BlogA = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;

  & + a {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #000;
  }
`

export const BlogTime = styled.time`
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #3b39399f;
`
export const BlogStrong = styled.strong`
  color: #000;
  display: block;
  font-size: 1.5rem;
  margin-top: 1rem;
  line-height: 2rem;
  transition: color 0.2s;
  &:hover  {
    color: #01bf71;
  }
`
export const BlogP = styled.p`
  color: #000;
  margin-top: 0.5rem;
  line-height: 1.625rem;
`