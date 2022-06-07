import { LeftBar } from '../components/Bar/Main'
import { Header } from '../components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
        <Header title="Emre Yıldırım"/>
        <div className='container md:w-[70rem] mx-auto md:my-24'>
            <LeftBar />
        </div>
    </div>
  )
}

export default Home
