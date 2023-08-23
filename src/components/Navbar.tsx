import Link from 'next/link';
import Menu from './Menu';

export default function Navbar() {
  return (
    <header className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500">
      <div>
        <Link href="/" className="uppercase text-xl">
          belefull
        </Link>
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
}
