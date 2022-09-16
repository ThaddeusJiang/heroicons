import type { NextPage } from 'next'
import Head from 'next/head'

import {
  BoxCogIcon,
  CalculatorColorIcon,
  CardColorIcon,
  DocumentsColorIcon,
  PencilColorIcon,
  RewardColorIcon,
  SettingColorIcon,
} from '@sodaicons/react/outline'

import { AppStoreIcon, ReviewIcon } from '@sodaicons/react/solid'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>@sodaicons/react</title>
        <meta name="description" content="@sodaicons/react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h2>@sodaicons/react/outline</h2>
          <p>
            <BoxCogIcon className="icon icon-color" />
            <CalculatorColorIcon className="icon" />
            <CardColorIcon className="icon" />
            <DocumentsColorIcon className="icon" />
            <span className="icon-color">
              <PencilColorIcon className="icon" />
            </span>
            <RewardColorIcon className="icon" />
            <SettingColorIcon className="icon" />
          </p>
        </section>

        <section>
          <h2>@sodaicons/react/solid</h2>
          <p>
            <AppStoreIcon className="icon" />
            <ReviewIcon className="icon" />
          </p>
        </section>
      </main>
    </div>
  )
}

export default Home
