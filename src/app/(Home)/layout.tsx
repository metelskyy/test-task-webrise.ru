import type { Metadata } from 'next';
import { Bebas_Neue, Roboto_Condensed } from 'next/font/google';
import '@/styles/globals.scss';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
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
