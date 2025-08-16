import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Mykhailo Andrusiak</title>
      </Head>
      <main className="flex items-center justify-center bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] min-h-screen text-sunset-peach">
        <div className="text-center px-6 py-12">
          <h1 className="text-5xl font-bold mb-4">404 - Oops!</h1>
          <p className="text-xl mb-8">The page you&#39;re looking for does not exist.</p>
          <Link href="/" className="bg-sunset-orange text-sunset-brown hover:bg-sunset-peach px-5 py-3 rounded-lg font-medium transition-colors">
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
