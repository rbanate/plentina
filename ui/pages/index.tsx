import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/forms/login'
export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center flex-1 gap-4 ml-auto mr-auto text-center sm:w-full lg:w-2/4 ">
        <div className="hidden border-r-2 border-blue-900 lg:w-full xl:block">
          <Image
            src="https://static.wixstatic.com/media/624f8b_f1dd9c84ce9943989d30a6a5e757b727~mv2.png/v1/fill/w_493,h_884,al_c,lg_1,q_90/Android-mockupfin1_cover.webp"
            width={377}
            height={676}
            className="hidden"
          ></Image>
        </div>
        <div className="w-full ">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
