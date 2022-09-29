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
} from '../../../react/outline'

import {
  AppStoreIcon,
  ReviewIcon,
  BonusColorIcon,
  BabyColorIcon,
  BusinessCardIcon,
  CalculatorColorIcon as CalculatorColorSolidIcon,
  CareColorIcon,
  ClipboardCheckColorIcon,
  ContractColorIcon,
  MoveColorIcon,
  OfficeColorIcon,
  OldPeopleColorIcon,
  OnboardingIcon,
  ResignIcon,
  SalaryColorIcon,
  SignatureIcon,
} from '../../../react/solid'

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
            <BonusColorIcon className="icon text-primary" />
            <CalculatorColorSolidIcon className="icon text-primary" />
            <BabyColorIcon className="icon text-primary" />
            <BusinessCardIcon className="icon text-primary" />
            <CareColorIcon className="icon text-primary" />
            <ClipboardCheckColorIcon className="icon text-primary" />
            <ContractColorIcon className="icon text-primary" />
            <MoveColorIcon className="icon text-primary" />
            <OfficeColorIcon className="icon text-primary" />
            <OldPeopleColorIcon className="icon text-primary" />
            <OnboardingIcon className="icon text-primary" />
            <ResignIcon className="icon text-primary" />
            <SalaryColorIcon className="icon text-primary" />
            <SignatureIcon className="icon text-primary" />
          </p>
        </section>
      </main>
    </div>
  )
}

export default Home
