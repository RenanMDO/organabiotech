import Head from "next/head";
import { BlogMain, BlogDiv, BlogA, BlogTime, BlogStrong, BlogUl, BlogLi } from "../../components/PostElements"
import { getPrismicClient } from '../../services/prismics';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps, GetServerSideProps } from 'next';
import Link from "next/link";
import { useState } from "react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
  totalPages: [];
  pageSize: number;
  page: number;
  totalPosts: number;
}

export default function Blog({ posts, totalPages, pageSize, page, totalPosts }: PostsProps) {
  const [onPage, setOnPage] = useState(page);

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
      <BlogUl>
        {totalPages.map(page => (
          <Link href={`/blog?page=${page}&size=${pageSize}`}>
            <BlogLi key={page} >
              <BlogA>{page}</BlogA>
            </BlogLi>
          </Link>
        ))}
      </BlogUl>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const prismic = getPrismicClient()
  const { page = '1', size = '5' } = query
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

  const totalPosts = response.total_results_size

  console.log(totalPosts)

  return {
    props: {
      posts,
      totalPages,
      pageSize: sz,
      totalPosts
    }
  }
}