import Link from 'next/link'

export default function Header() {
  return (
    <>
      <h2 className="text-2xl md:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 sm:mb-12 mt-4 sm:mt-8">
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
        <Link href="/">
          <a style={{ fontFamily: "Lobster Two", letterSpacing: "5px", marginRight: "10px" }} className="hover:underline text-coffee">Blog</a>
        </Link>
        <span className="text-gray-25">.</span>
      </h2>
    </>
  )
}
