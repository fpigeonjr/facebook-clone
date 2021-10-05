import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Feed from '../components/Feed'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // get user
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
