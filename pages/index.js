import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const size = 6;

  function chunksMaker() {
		const result = [];
		for (let i = 0; i < morePosts.length; i += size) {
			result.push(morePosts.slice(i, i + size));
		}
		return result;
	}

  const arrays = chunksMaker();

  return (
    <>
      <Head>
        <meta name="description" content="Radca Prawny Łukasz Szczepaniak Piaseczno Praktyka: sprawy majątkowe, spółki handlowe, obsługa przedsiębiorców, sprawy rodzinne, umowy w IT, sprawy karne." /> 
        <title>Kancelaria Radcy Prawnego</title>
      </Head>
      <Layout>
        <div className="block sm:hidden">
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
          <div style={{ fontFamily: "Roboto Condensed" }} className=" py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-sm text-coffee">Wnikliwie o prawie dla Ciebie !</div>
        </div>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories arrays={arrays} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
