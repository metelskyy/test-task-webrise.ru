import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.scss';

const bebasNeue = localFont({
  src: [
    {
      path: '../fonts/bebas-neue/bebasneuebook.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/bebas-neue/bebasneueregular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../fonts/bebas-neue/bebasneuebold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bebas',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Test-task-website.ru',
  description: 'Test-task-website.ru',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${bebasNeue.variable}`}>{children}</body>
    </html>
  );
}
