import { Typography } from '@/app/components';
import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';
import { SOCIALS } from '@/constants';
import UIButton from '@/app/components/ui/UIButton/UIButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoAndNumber}>
          <Link href="/">
            <Typography variant="title-5" color="white" font="bebas">
              SUPERGYM
            </Typography>
          </Link>
          <Typography variant="title-5" color="white" font="bebas">
            8-800-555-55-55
          </Typography>
        </div>

        <div className={styles.innerContainer}>
          <div className={styles.text}>
            <Typography variant="title-4" color="white" font="bebas" className={styles.city}>
              Омск
            </Typography>
            <div className={styles.innerText}>
              <Typography
                color="white"
                variant="title-1"
                font="bebas"
                className={styles.mainText}
                component="h1"
              >
                {'Фитнес \n центр'}
              </Typography>
              <Typography color="white" className={styles.textOptions}>
                {'Тренажёрный зал \n Групповые занятия \n Кардио-зона'}
              </Typography>
            </div>
            <UIButton href="#abonements" className={styles.button}>
              Купить абонемент
            </UIButton>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/images/superman.png" priority fill alt="superman" />
          </div>
          <div className={styles.socials}>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.label} className={styles.socialLink}>
                  <Link href={social.href}>
                    <Typography color="white" font="bebas">
                      {social.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
