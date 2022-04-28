import styled from 'styled-components'

export const PostMain = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 2rem;
`
export const ArticlePost = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;
`
export const PostH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`
export const TimePost = styled.time`
  display: block;
    font-size: 1rem;
    color: #000;
    margin-top: 1.5rem;
`
export const PostDiv = styled.div`
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.125rem;
  color: #000;
  p, ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;

      li {
        margin: 0.5rem 0;
      }
    }
    &.previewContent {
      background: linear-gradient(var(--gray-100), transparent);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`