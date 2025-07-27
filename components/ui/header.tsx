import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-20 w-full bg-sunset-brown/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-center gap-8 py-4 text-sunset-peach">
        <Link href="#about" className="hover:text-sunset-orange transition-colors">About</Link>
        <Link href="#experience" className="hover:text-sunset-orange transition-colors">Experience</Link>
        <Link href="#projects" className="hover:text-sunset-orange transition-colors">Projects</Link>
      </nav>
    </header>
  );
}
