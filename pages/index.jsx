import Head from 'next/head';
import Link from 'next/link';

import { DefaultLayout as Layout } from '../components/layouts';
import { Button } from '../components/uikit';

import styles from '../styles/index.module.scss';

function Index() {
  return (
    <Layout>
      <Head>
        <title>Sri Aspari | A Lazy Developer</title>
      </Head>

      <div className={styles.box}>
        <div className={styles.boxImage}>
          <img
            src="https://avatars.githubusercontent.com/u/42394346?v=4"
            alt="Siarie's photo profile"
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.boxInfo}>
          <h1 className={styles.title}>Sri Aspari</h1>
          <h2 className={styles.subtitle}>Web Developer</h2>
          <p className={styles.bio}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex.
          </p>
        </div>

		<nav className={styles.boxNav}>
			<Link href="https://blog.siarie.me">
				<a className={styles.boxLink}>blog</a>
			</Link>

			<Link href="/contacts">
				<a className={styles.boxLink}>contacts</a>
			</Link>

			<Link href="/projects">
				<a className={styles.boxLink}>projects</a>
			</Link>

			<Link href="/supports">
				<a className={styles.boxLink}>supports</a>
			</Link>
		</nav>
      </div>
    </Layout>
  );
}

export default Index;
