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
            <PencilColorIcon className="icon" />
            <SettingColorIcon className="icon" />
            <CardColorIcon className="icon" />
            <CalculatorColorIcon className="icon" />
            <RewardColorIcon className="icon" />
            <BoxCogIcon className="icon " />

            <DocumentsColorIcon className="icon" />
          </p>
        </section>

        <section>
          <h2>@sodaicons/react/solid</h2>
          <p>
            <AppStoreIcon className="icon " />
            <ReviewIcon className="icon text-primary" />
          </p>
        </section>
      </main>
    </div>
  )
}

export default Home
