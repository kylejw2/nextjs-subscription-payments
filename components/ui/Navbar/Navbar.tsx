import Link from 'next/link';

import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';
import GCXLogo from '../Logo';

export default async function Navbar() {
  return (
    <nav className={s.root}>
      <div className="max-w-6xl px-6 mx-auto flex flex-col justify-between h-[95vh]">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex flex-col justify-start items-start flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="mt-4 flex flex-col w-[200px]">
              <Link href="/customers" className={s.link}>
                Customers
              </Link>
              <Link href="/sales-pipeline" className={s.link}>
                Sales Pipeline
              </Link>
              <Link href="/reports" className={s.link}>
                Reports
              </Link>
              <Link href="/" className={s.link_active}>
                Onboarding Portal
              </Link>
            </nav>
          </div>
        </div>
        <div>
          <GCXLogo loading={false}/>
        </div>
      </div>
    </nav>
  );
}
