import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ListenedBookBox from '../components/ListenedBookBox';
import RecentlyPlayedBox from '../components/RecentlyPlayedBox';
import MostPopularSection from '../components/MostPopularSection';
import SideBookSection from '../components/SideBookSection';

import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchTogle] = useState(false);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/books')
      .then((response) => response.json())
      .then((data) => setBooksData(data));
  }, []);

  console.log(booksData);

  const turnOff = () => {
    setToggle(false);
  };

  const turnOn = () => {
    setToggle(true);
  };

  const menuTurnOn = () => {
    setMenuToggle(true);
  };

  const menuTurnOff = () => {
    setMenuToggle(false);
  };

  const searchTurnOn = () => {
    setSearchTogle(true);
  };

  const searchTurnOff = () => {
    setSearchTogle(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={[styles.main, !toggle ? styles.secondMain : ' '].join(' ')}
      >
        <Navigation menuTurnOff={menuTurnOff} menuToggle={menuToggle} />

        <div className={styles.components}>
          <Header
            menuTurnOn={menuTurnOn}
            searchTurnOn={searchTurnOn}
            searchToggle={searchToggle}
            searchTurnOff={searchTurnOff}
          />
          <ListenedBookBox />
          <RecentlyPlayedBox turnOn={turnOn} booksData={booksData} />
          <MostPopularSection booksData={booksData} />
        </div>

        <div className={styles.sideSection}>
          <SideBookSection toggle={toggle} turnOff={turnOff} />
        </div>
      </main>
    </div>
  );
};

export default Home;
