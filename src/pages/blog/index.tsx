import Head from "next/head";
import { BlogMain, BlogDiv, BlogA, BlogTime, BlogStrong, BlogP } from "./PostElements"
import { getPrismicClient } from '../../services/prismics';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps } from 'next';
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Blog({ posts }: PostsProps) {
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['title', 'content'],
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



  return {
    props: { posts }
  }
}