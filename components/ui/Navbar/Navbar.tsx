import Link from 'next/link';

import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';

export default async function Navbar() {
  return (
    <nav className={s.root}>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/" className={s.link}>
                Pricing
              </Link>
                <Link href="/account" className={s.link}>
                  Account
                </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
