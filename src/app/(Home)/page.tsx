import Link from 'next/link';
import { Typography } from '../components';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoAndNumber}>
            <Link href="/">
              <Typography variant="title-6" color="white" font="bebas">
                SUPERGYM
              </Typography>
            </Link>
            <Typography variant="title-6" color="white">
              8-800-555-55-55
            </Typography>
          </div>

          <div>
            <div className={styles.headerText}></div>
            <div className={styles.headerImgContainer}></div>
            <div className={styles.headerSocials}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
