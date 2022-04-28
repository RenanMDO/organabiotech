import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismics";
import { PostMain, PostH1, TimePost, PostDiv, ArticlePost } from './ContentElement'

interface PostsProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostsProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Organa Biotech</title>
      </Head>

      <PostMain>
        <ArticlePost>
          <PostH1>{post.title}</PostH1>
          <TimePost>{post.updatedAt}</TimePost>
          <PostDiv
            dangerouslySetInnerHTML={{ __html: post.content }} />
        </ArticlePost>
      </PostMain>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };

  return {
    props: {
      post,
    }
  }
}