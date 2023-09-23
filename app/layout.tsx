import { Header } from '@/components';
import type { Metadata } from 'next';
import { Providers } from '@/themes/Providers';

import './globals.css';

export const metadata: Metadata = {
  title: "Gismo's Gazet",
  description: 'Generated by Gismo dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <div className="bg-gray-100 dark:bg-zinc-900 transition-all min-h-screen">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
