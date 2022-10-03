import Navbar from '../components/Navbar_Component/Navbar'
import ProfileInformation from '../components/ProfileInformation_Component/ProfileInformation'
import WorkAndEducation from '../components/WorkAndEducation_Component/WorkAndEducation'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <meta name="a.validate.02" content="YifPncGjT06aI8JchBDqLQujMBZagpCCGOpW" />
      </Head>
      <Navbar />
      <ProfileInformation />
      <WorkAndEducation />
    </>
  )
}
