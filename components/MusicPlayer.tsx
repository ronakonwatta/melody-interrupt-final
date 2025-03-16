'use client';
import { playNote } from '../utils/audio';
import { useState, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(300);

  const keyMap: { [key: string]: number } = {
    a: 440,
    s: 494,
    d: 523,
    f: 587,
    g: 659,
    h: 698,
    j: 784,
  };

  const melody = [
    { freq: 440, dur: 0.2 },
    { freq: 494, dur: 0.2 },
    { freq: 523, dur: 0.2 },
    { freq: 440, dur: 0.2 },
  ];

  const playMelody = () => {
    setIsPlaying(true);
    let i = 0;
    const interval = setInterval(() => {
      playNote(melody[i].freq, melody[i].dur);
      i++;
      if (i >= melody.length) {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, tempo);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const freq = keyMap[event.key];
      if (freq) {
        playNote(freq, 0.3);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={playMelody}
        disabled={isPlaying}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isPlaying ? 'Playing Melody...' : 'Play Melody'}
      </button>

      <button
        onClick={() => playNote(660, 0.3)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Play Interrupt Note (660 Hz)
      </button>

      <button
        onClick={() => setTempo((prev) => (prev > 100 ? prev - 50 : prev))}
        className="px-4 py-2 bg-yellow-600 text-white rounded"
      >
        Increase Tempo (Faster)
      </button>

      <button
        onClick={() => setTempo((prev) => prev + 50)}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Decrease Tempo (Slower)
      </button>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2">🎹 Keyboard Controls:</h2>
        <p>Press keys: <b>a, s, d, f, g, h, j</b> to play notes!</p>
      </div>
    </div>
  );
}