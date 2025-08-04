import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Riva Imanudin | Portfolio',
  description: 'Portfolio pribadi Riva Imanudin, seorang Cyber Security & IT Specialist.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}