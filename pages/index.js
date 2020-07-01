import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
      <p>
        Hello, I'm Harrison. I'm a software engineer always looking out for new cool stuff 😎.
      </p>
      </section>
    </Layout>
  )
}
