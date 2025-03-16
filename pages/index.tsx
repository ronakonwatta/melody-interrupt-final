import Head from 'next/head';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Melody Interrupt 8-bit</title>
        <meta name="description" content="8-bit Melody with Interrupt Example" />
      </Head>

      <h1 className="text-3xl font-bold mb-8">🎶 Melody Interrupt 8-bit 🎶</h1>
      <MusicPlayer />
    </div>
  );
}