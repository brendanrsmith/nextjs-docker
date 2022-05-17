import Head from "next/head"
import Image from "next/image"

export default function Home(): JSX.Element {
  return (
    <div className={"flex flex-col min-h-screen dark:bg-zinc-800 dark:text-zinc-300 text-center"}>
      <Head>
        <title>Create Next App</title>
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
          Hello to{" "}
          <a className={"underline"} href="https://nextjs.org">
            Next.js
          </a>{" "}
          on Docker!
        </h1>

        <p className={"m-2 mb-8"}>
          Get started by editing{" "}
          <code
            className={
              "font-mono bg-zinc-100 dark:bg-zinc-600 rounded-md py-1 px-2 text-sm"
            }
          >
            pages/index.js
          </code>
        </p>

        <div
          className={
            "grid lg:grid-cols-2 gap-5 max-w-4xl m-3 mx-auto "
          }
        >
          <a
            href="https://nextjs.org/docs"
            className={
              "p-6 rounded-lg shadow-md max-w-md flex flex-col mx-auto text-lg hover:text-blue-500 dark:border-zinc-400 dark:border-2 dark:hover:border-blue-500 transition-all"
            }
          >
            <h3>Documentation &rarr;</h3>
            <p>
              Find in-depth information about Next.js features and
              API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={
              "p-6 rounded-lg shadow-md max-w-md flex flex-col mx-auto text-lg hover:text-blue-500 dark:border-zinc-400 dark:border-2 dark:hover:border-blue-500 transition-all "
            }
          >
            <h3>Learn &rarr;</h3>
            <p>
              Learn about Next.js in an interactive course with
              quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={
              "p-6 rounded-lg shadow-md max-w-md flex flex-col mx-auto text-lg hover:text-blue-500 dark:border-zinc-400 dark:border-2 dark:hover:border-blue-500 transition-all"
            }
          >
            <h3>Examples &rarr;</h3>
            <p>
              Discover and deploy boilerplate example Next.js
              projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={
              "p-6 rounded-lg shadow-md max-w-md flex flex-col mx-auto text-lg hover:text-blue-500 dark:border-zinc-400 dark:border-2 dark:hover:border-blue-500 transition-all"
            }
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL
              with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={"mb-4"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Powered by{" "}
          </p>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={84}
            height={30}
            className={"dark:invert"}
          />
        </a>
      </footer>
    </div>
  )
}
