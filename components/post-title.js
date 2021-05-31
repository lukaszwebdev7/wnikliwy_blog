export default function PostTitle({ children }) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
      <h1 style={{ fontFamily: "EB Garamond" }} className="text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight md:leading-none mb-12 text-center md:text-left">
        {children}
      </h1>
    </>
  )
}
