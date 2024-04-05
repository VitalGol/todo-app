'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const titleName = ['Todo App', 'Rick and Morty'];
  const pathname = usePathname();

  let logo;
  if (pathname == '/') {
    logo = titleName[0];
  } else if (pathname == '/cartoon') {
    logo = titleName[1];
  }

  return (
    <div className="flex flex-wrap justify-around items-center py-4 bg-slate-200">
      <h1 className="text-lg font-bold text-red-800">{logo}</h1>
      <ul className="flex justify-center items-center gap-8 text-md">
        <Link
          className={` ${
            pathname === '/'
              ? 'bg-green-500 rounded-lg px-6 py-2 text-white'
              : ''
          }`}
          href="/"
        >
          Todo App
        </Link>
        <Link
          className={`link ${
            pathname === '/cartoon'
              ? 'bg-green-500 rounded-lg px-6 py-2 text-white'
              : ''
          }`}
          href="/cartoon"
        >
          Cartoon
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
