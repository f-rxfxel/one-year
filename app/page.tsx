'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import localFont from 'next/font/local'
import T from '@/components/teamo/T';
import E from '@/components/teamo/E';
import Winter from '@/components/icons/winter';
import Summer from '@/components/icons/summer';
import Autumn from '@/components/icons/autumn';
import Spring from '@/components/icons/spring';

const TheSeasons = localFont({
  src: '../public/fonts/TheSeasons.otf',
})

const seasons = {
  autumn: {
    key: 'autumn',
    title: 'DOIS',
    subtitle: <span className="whitespace-nowrap">OU<T/><span className="-ml-1 md:-ml-4">ONOS</span></span>,
    images: ['/images/autumn 1.png', '/images/autumn 2.png'],
    icon: (color: string) => <Autumn fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'autumn',
  },
  winter: {
    key: 'winter',
    title: 'DOIS',
    subtitle: <span className="whitespace-nowrap"><span className="-mr-0 md:-mr-0">INV</span><E/><span>RNOS</span></span>,
    images: ['/images/winter 1.png', '/images/winter 2.png'],
    icon: (color: string) => <Winter fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'winter',
  },
  spring: {
    key: 'spring',
    title: 'DUAS',
    subtitle: 'PRIMAVERAS',
    images: ['/images/spring 1.png', '/images/spring 2.png'],
    icon: (color: string) => <Spring fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'spring',
  },
  summer: {
    key: 'summer',
    title: 'DOIS',
    subtitle: 'VEROES',
    images: ['/images/summer 1.png', '/images/summer 2.png'],
    icon: (color: string) => <Summer fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'summer',
  },
} as const;

const seasonKeys = Object.keys(seasons) as (keyof typeof seasons)[];

export default function Component() {
  const [seasonKey, setSeasonKey] = useState<keyof typeof seasons>('autumn');
  const [prevSeasonKey, setPrevSeasonKey] = useState<keyof typeof seasons | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 35;
      const y = (event.clientY / window.innerHeight - 0.5) * 35;
      setMousePosition({ x, y });
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const season = seasons[seasonKey];
  const prevSeason = prevSeasonKey ? seasons[prevSeasonKey] : null;

  const transitionToSeason = (newKey: keyof typeof seasons) => {
    if (seasonKey === newKey) return;
    setPrevSeasonKey(seasonKey);
    setSeasonKey(newKey);
  };

  const handlePreviousSeason = () => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const previousIndex = (currentIndex - 1 + seasonKeys.length) % seasonKeys.length;
    transitionToSeason(seasonKeys[previousIndex]);
  };

  const handleNextSeason = () => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const nextIndex = (currentIndex + 1) % seasonKeys.length;
    transitionToSeason(seasonKeys[nextIndex]);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);

      event.deltaY > 0 ? handleNextSeason() : handlePreviousSeason();

      setTimeout(() => {
        setPrevSeasonKey(null);
        setIsScrolling(false);
      }, 600);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [seasonKey, isScrolling]);

 const renderImage = (imgSrc: string, key: string, visible: boolean) => (
  <Image
    key={key}
    src={imgSrc}
    alt=""
    fill
    className={`absolute top-0 left-0 transition-opacity duration-500 opacity-50 ${
      visible ? 'opacity-100 z-10' : 'opacity-0 z-0'
    }`}
    style={{
      objectFit: 'cover',
      mixBlendMode: 'luminosity',
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.2)`,
      transition: 'transform 0.1s linear',
    }}
  />
);


  return (
    <div
      className={`md:flex-row md:py-12 md:px-0 px-6 flex flex-col items-center justify-between h-screen bg-${season.color}-background`}
    >
      <section
        onClick={handlePreviousSeason}
        className={`relative md:w-60 md:h-full h-28 w-full md:border-t md:border-l-0 border-${season.color}-highlight border-b border-r border-l flex items-center justify-center overflow-hidden`}
      >
        {prevSeason && renderImage(prevSeason.images[0], `${prevSeason.key}-1`, false)}
        {renderImage(season.images[0], `${season.key}-1`, true)}
      </section>

      <main
        className={`md:m-12 m-6 size-full border border-${season.color}-highlight flex flex-col items-center justify-center`}
      >
        <div className="flex items-center md:gap-18 gap-20 pb-12">
          <span className={`md:text-xl text-lg font-medium text-${season.color}-highlight`}>09</span>
          <div className={`transition-colors duration-500 text-${season.color}-highlight relative`}>
            {season.icon(`currentColor`)}
          </div>
          <span className={`md:text-xl text-lg font-medium text-${season.color}-highlight`}>06</span>
        </div>
        <h1 className={`lg:text-9xl sm:text-7xl text-5xl text-${season.color}-highlight ${TheSeasons.className}`}>{season.title}</h1>
        <h1 className={`lg:text-9xl sm:text-7xl text-5xl mb-4 text-${season.color}-highlight ${TheSeasons.className}`}>{season.subtitle}</h1>
        <p className={`md:max-w-2/3 px-8 text-md text-justify border-${season.color}-highlight text-${season.color}-highlight`}>Em raios solares sem aviso, as folhas cairão mesmo enquanto ainda houver perfume de flor; o frio se instalará em meio ao calor, como o rio que se congela e depois se torna refrescante. A flor caída retorna à terra para dar força a outra flor. Portanto, eu morreria feliz, porque tudo é real e tudo está certo. O que for, quando for, é o que será o que é.</p>
      </main>
    

      <section
        onClick={handleNextSeason}
        className={`relative md:w-60 md:h-full h-28 w-full md:border-b md:border-r-0 border-${season.color}-highlight border-t border-l border-r flex items-center justify-center overflow-hidden`}
      >
        {prevSeason && renderImage(prevSeason.images[1], `${prevSeason.key}-2`, false)}
        {renderImage(season.images[1], `${season.key}-2`, true)}
      </section>
    </div>
  );
}
