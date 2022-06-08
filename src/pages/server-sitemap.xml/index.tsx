// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getPrismicClient } from '../../services/prismics'
import Prismic from '@prismicio/client'



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const prismic = getPrismicClient()
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')],
    {
      orderings: '[document.first_publication_date desc]',
      fetch: ['title', 'content'],
      page: 1,
      pageSize: 100,
    })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      updatedAt: new Date(post.last_publication_date).toISOString()
    };
  });

  const fields: ISitemapField[] = posts.map(posts => ({ loc: `https://www.organabiotech.com.br/blog/${posts.slug}`, lastmod: `${posts.updatedAt}` }))

  return getServerSideSitemap(ctx, fields)
}

export default function Sitemap() { }