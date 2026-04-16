import React, { useState, useEffect } from 'react';

export const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white">


      <main className="h-screen w-full flex flex-col items-center justify-center bg-surface-bright relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" >
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-md w-full px-8">

          <div className="mb-12 fade-in" >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-primary flex items-center gap-2">
              SkillsUp
            </h1>
          </div>

          <div className="w-full space-y-6 fade-in" >

            <div className="relative h-[2px] w-full bg-surface-container-highest overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full loading-bar-shimmer opacity-80"></div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                System Status: Initializing
              </p>
              <p className="text-sm font-medium text-secondary italic">
                Preparing your editorial workspace...
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 w-full flex flex-col items-center fade-in" >
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.15em] text-outline-variant">
            <span>V 2.4.0</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
            <span>Encrypted Session</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
            <span>Faurza Engine</span>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-surface-container-highest m-8 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-surface-container-highest m-8 opacity-50"></div>
      </main>

      <div className="hidden">
        <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
        <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
        <span className="material-symbols-outlined" data-icon="verified">verified</span>
        <span className="material-symbols-outlined" data-icon="insert_chart">insert_chart</span>
      </div>

    </div>
  );
};