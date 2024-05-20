import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import '../globals.scss';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

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
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
