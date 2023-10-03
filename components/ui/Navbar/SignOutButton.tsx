'use client';

import { useRouter } from 'next/navigation';

import s from './Navbar.module.css';

export default function SignOutButton() {
  return (
    <button
      className={s.link}
    >
      Sign out
    </button>
  );
}
