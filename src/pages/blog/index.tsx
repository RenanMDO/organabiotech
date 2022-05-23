import Head from "next/head";
import { BlogMain, BlogDiv, BlogA, BlogTime, BlogStrong } from "../../components/PostElements"
import { getPrismicClient } from '../../services/prismics';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps, GetServerSideProps } from 'next';
import Link from "next/link";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
  totalPages: []
  pageSize: number | string
}

export default function Blog({ posts, totalPages, pageSize }: PostsProps) {
  const [page, setPage] = useState(1);

  return (
    <>
      <Head>
        <title>Blog | Organa Biotech</title>
      </Head>
      <BlogMain>
        <BlogDiv>
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`}>
              <BlogA key={post.slug}>
                <BlogTime>
                  {post.updatedAt}
                </BlogTime>
                <BlogStrong>
                  {post.title}
                </BlogStrong>
              </BlogA>
            </Link>
          ))}
        </BlogDiv>
      </BlogMain>
      <Pagination totalCountOfRegisters={100} currentPage={page} onPageChange={setPage} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const prismic = getPrismicClient()
  const { page = '1', size = '2' } = query
  const pg = Number(page)
  const sz = Number(size)

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')],
    {
      orderings: '[document.first_publication_date desc]',
      fetch: ['title', 'content'],
      page: pg,
      pageSize: sz,
    })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  });

  const totalPages = Array.from({ length: response.total_pages })
    .map((_, index) => index + 1)

  return {
    props: {
      posts,
      totalPages,
      pageSize: sz
    }
  }
}