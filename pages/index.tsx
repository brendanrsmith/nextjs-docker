import Head from "next/head"
import Image from "next/image"

export default function Home(props: { allPosts: any }): JSX.Element {
  return (
    <div className={"flex flex-col min-h-screen dark:bg-zinc-800 dark:text-zinc-300 text-center"}>
      <Head>
        <title>Nextjs-docker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          "flex-grow "
        }
      >
        <h1
          className={
            "text-3xl pt-24 py-10 font-mono  text-orange-500"
          }
        >
          Hello {" "}
          <a className={"underline bg-slate-200 drop-shadow-xl shadow-slate-100 p-2 rounded-sm hover:shadow-lg hover:shadow-orange-500 dark:shadow-lg dark:bg-transparent transition-shadow dark:shadow-orange-400"} href="https://nextjs.org">
            Next.js
          </a>{" "}
          on Docker!
        </h1>
        <h3 className="text-pink-400 text-xl">With external Strapi data:</h3>
        <div className=" flex justify-center">
          <div className={"flex flex-col outline-pink-400 outline-dashed max-w-2xl p-2"}>

            {props.allPosts.map((post: any) => {
              return (
                < div className="mt-8 first:mt-0" key={post.id} >
                  <h2 className="text-2xl">{post.attributes.name}</h2>
                  <p className="italic">{post.attributes.height} ft</p>
                  <p className="text-lg">{post.attributes.description}</p>
                  <Image src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + post.attributes.photo.data.attributes.url}`} alt={post.attributes.name} width={post.attributes.photo.data.attributes.formats.thumbnail.width} height={post.attributes.photo.data.attributes.formats.thumbnail.height} />
                </div>
              )
            })
            }
          </div>
        </div>
        <p className={"m-2 mb-8"}>
          Very cool, very fun.
        </p>
      </main >

    </div >
  )
}
export async function getStaticProps() {
  const allPosts = await fetch(`${process.env.STRAPI_API_URL}/mountains?populate=*`, { headers: { 'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}` } })
    .then(res => res.json())
    .then(data => data.data);
  return {
    props: { allPosts },
  }
}