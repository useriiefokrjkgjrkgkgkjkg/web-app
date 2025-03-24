'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '../utils/telegram';

export default function Home() {
  useEffect(() => {
    const webApp = initTelegramApp();
    if (webApp) {
      webApp.ready();
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="relative flex place-items-center">
        <h1 className="text-6xl font-bold text-white tracking-wider">
          Soon...
        </h1>
      </div>
    </main>
  );
}
