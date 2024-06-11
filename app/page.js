"use client"
import Image from 'next/image'
import styles from './page.module.css'

import Button  from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
   

      <Button>Book a table</Button>
      <Footer />
    </main>
  )
}
