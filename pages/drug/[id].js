import Head from 'next/head';
import { useRouter } from 'next/router'

export default function DP() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Open Targets Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TODO: Drug page should go here */}
      Drug page {id}


    </div>
  )
}
