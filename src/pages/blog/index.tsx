import Head from "next/head";
import { BlogMain, BlogDiv, BlogA, BlogTime, BlogStrong } from "../../components/PostElements"
import { getPrismicClient } from '../../services/prismics';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps } from 'next';
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
  total: number;
}

export default function Blog({ posts, total }: PostsProps) {
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
      <Pagination totalCountOfRegisters={total} currentPage={page} onPageChange={setPage} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  });


  const total = response.total_results_size;
  const pageStart = (Number(response.page) - 1) * Number(response.results_per_page);
  const pageEnd = pageStart + Number(response.results_per_page);
  const postsPage = posts.slice(pageStart, pageEnd)



  return {
    props: {
      posts,
      total
    },
    revalidate: 86400,

  }
}