import Head from 'next/head';
import { useRouter } from 'next/router';

import { DefaultLayout as Layout } from '../components/layouts';

export default function Projects(props) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>

      <article>
        <div>
          <a onClick={() => router.back()}>&#8637; back</a>
        </div>
        <h1 className="h3">Contacts</h1>

        <div>
          <h2 className="h5">Social Media</h2>
          <ul>
            <li>
              <a rel="me" href="https://fosstodon.org/@siarie">
                Mastodon
              </a>
            </li>
            <li>
              <a href="https://reddit.com/u/siarie_">Reddit</a>
            </li>
            <li>
              <a href="https://twitter.com/siarie_">Twitter</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h5">Contacts</h2>
          <ul>
            <li>
              <a href="mailto:mail@siarie.me">E-Mail</a>
            </li>
            <li>
              <a href="https://t.me/siarie">Telegram</a>
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  );
}
