import Link from 'next/link'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
        <div style={{ fontFamily: "Roboto Condensed", textAlign: "justify" }}
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <h2 className="flex justify-end text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight sm:mb-8 mt-8 mr-2 lg:mr-16 xl:mr-40">
        <Link href="/">
          <a style={{ fontFamily: "Lobster Two", letterSpacing: "2px" }} className="text-gray-75 hover:underline">Blog</a>
        </Link>
        <span className="block text-gray-25">.</span>
      </h2>
    </>
  )
}
