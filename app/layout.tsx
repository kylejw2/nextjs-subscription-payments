import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-white loading 100vh flex">
          {/* @ts-expect-error */}
          <Navbar />
          <main
            id="skip"
            className='w-full'
          >
            {children}
          </main>
      </body>
    </html>
  );
}
