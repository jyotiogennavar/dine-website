"use client";
import Image from "next/image";
import styles from "./page.module.css";

import ReservationBanner from "@/components/BookATableBanner";
import Header from "@/components/Header";
import MenuHighlights from "@/components/MenuHighlights";
import Features from "@/components/Features";
import Tabs from "@/components/Tabs";


export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <MenuHighlights />
      <Tabs />
      <ReservationBanner />
    </main>
  );
}
