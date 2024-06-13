"use client";
import Image from "next/image";
import styles from "./page.module.css";

import ReservationBanner from "@/components/BookATableBanner";
import Header from "@/components/Header";



export default function Home() {
  return (
    <main>
      <Header />
      <ReservationBanner />
    </main>
  );
}
