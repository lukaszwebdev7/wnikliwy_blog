import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
      <div style={{ fontFamily: "EB Garamond" }} className="mx-6">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4 text-justify">{excerpt}</p>
      </div>
    </>
  )
}
