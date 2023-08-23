import Link from 'next/link';

export default function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between uppercase">
      <Link href="/" className="font-bold text-xl">
        belefull
      </Link>
      <p>All rights reseverd.</p>
    </div>
  );
}
