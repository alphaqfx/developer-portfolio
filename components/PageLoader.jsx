'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    // For client-side navigation
    router.prefetch = (href) => {
      handleStart();
      return Promise.resolve();
    };

    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleStop);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleStop);
    };
  }, [router]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-transparent border-t-white rounded-full animate-spin" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}