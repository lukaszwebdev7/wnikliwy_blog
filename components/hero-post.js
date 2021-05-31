import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
      <section style={{ fontFamily: "EB Garamond" }} className="mt-2 sm:mt-0">
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4 text-justify lg:ml-2">{excerpt}</p>
          </div>
        </div>
      </section>
    </>
  )
}
