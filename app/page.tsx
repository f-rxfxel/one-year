'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback  } from 'react';

import localFont from 'next/font/local'
import T from '@/components/teamo/T';
import E from '@/components/teamo/E';
import Winter from '@/components/icons/winter';
import Summer from '@/components/icons/summer';
import Autumn from '@/components/icons/autumn';
import Spring from '@/components/icons/spring';
import A from '@/components/teamo/A';
import M from '@/components/teamo/M';
import O from '@/components/teamo/O';

const TheSeasons = localFont({
  src: '../public/fonts/TheSeasons.otf',
})

const seasons = {
  autumn: {
    key: 'autumn',
    title: 'DOIS',
    subtitle: <span className="whitespace-nowrap">OU<T/><span className="-ml-3 md:-ml-4">ONOS</span></span>,
    images: ['/images/autumn 1.png', '/images/autumn 2.png'],
    icon: (color: string) => <Autumn fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'autumn',
  },
  winter: {
    key: 'winter',
    title: 'DOIS',
    subtitle: <span className="whitespace-nowrap"><span className="-mr-1 md:-mr-3">INV</span><E/><span>RNOS</span></span>,
    images: ['/images/winter 1.png', '/images/winter 2.png'],
    icon: (color: string) => <Winter fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'winter',
  },
  spring: {
    key: 'spring',
    title: <span className="whitespace-nowrap"><span className="-mr-2 md:-mr-5">DU</span><A/><span className='-ml-2 md:-ml-3'>S</span></span>,
    subtitle: <span className="whitespace-nowrap"><span className='-mr-0.5 md:mr-2'>PRI</span><M/><span className='md:-ml-6 -ml-6'>AVERAS</span></span>,
    images: ['/images/spring 1.png', '/images/spring 2.png'],
    icon: (color: string) => <Spring fill={color} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />,
    color: 'spring',
  },
  summer: {
    key: 'summer',
    title: <span className="whitespace-nowrap">D<span className='relative md:bottom-4 bottom-2'><O/></span><span className='-ml-0 md:-ml-0'>IS</span></span>,
    subtitle: 'VERÕES',
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
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 35;
      const y = (event.clientY / window.innerHeight - 0.5) * 35;
      setMousePosition({ x, y });
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--app-vh', `${window.innerHeight}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const season = seasons[seasonKey];
  const prevSeason = prevSeasonKey ? seasons[prevSeasonKey] : null;

  const transitionToSeason = (newKey: keyof typeof seasons) => {
    if (seasonKey === newKey) return;
    setPrevSeasonKey(seasonKey);
    setSeasonKey(newKey);
  };

  const handlePreviousSeason = useCallback(() => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const previousIndex = (currentIndex - 1 + seasonKeys.length) % seasonKeys.length;
    transitionToSeason(seasonKeys[previousIndex]);
  }, [seasonKey]);

  const handleNextSeason = useCallback(() => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const nextIndex = (currentIndex + 1) % seasonKeys.length;
    transitionToSeason(seasonKeys[nextIndex]);
  }, [seasonKey]);

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
  }, [seasonKey, isScrolling, handleNextSeason, handlePreviousSeason]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStartY !== null && touchEndY !== null) {
      const distance = touchStartY - touchEndY;
      if (Math.abs(distance) > 50 && !isScrolling) {
        setIsScrolling(true);
        if (distance > 0) {
          handleNextSeason();
        } else {
          handlePreviousSeason();
        }
        setTimeout(() => {
          setPrevSeasonKey(null);
          setIsScrolling(false);
        }, 600);
      }
    }
    setTouchStartY(null);
    setTouchEndY(null);
  };

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
      transform: isMobile
        ? 'scale(1.2)'
        : `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.2)`,
      transition: 'transform 0.1s linear',
    }}
  />
);

  const openSeasonImage = () => {
    const key = season.key;
    const imageUrl = `/images/${key}.png`;
    window.open(imageUrl, '_blank');
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`flex flex-col md:flex-row items-center justify-between md:py-12 md:px-0 px-6 bg-${season.color}-background ${
        isMobile ? 'full-mobile-height' : 'h-screen'
      }`}
    >
      <section
        onClick={handlePreviousSeason}
        className={`relative md:w-60 md:h-full h-28 w-full md:border-t md:border-l-0 border-${season.color}-highlight border-b border-r border-l flex items-center justify-evenly overflow-hidden`}
      >
        {prevSeason ? renderImage(prevSeason.images[0], `${prevSeason.key}-1`, false) : null}
        {renderImage(season.images[0], `${season.key}-1`, true)}
      </section>

      <main
        className={`md:m-12 m-6 size-full border border-${season.color}-highlight flex flex-col items-center justify-center md:justify-center`}
      >
        <div className="flex items-center md:gap-18 gap-16 pb-16 md:pb-20">
          <span className={`md:text-xl text-md font-medium text-${season.color}-highlight`}>09</span>
          <div className={`transition-colors duration-500 text-${season.color}-highlight relative`}>
            <span onClick={openSeasonImage} style={{ cursor: 'pointer' }} title={`Clique aqui!`}>
              {season.icon(`currentColor`)}
            </span>
          </div>
          <span className={`md:text-xl text-md font-medium text-${season.color}-highlight`}>06</span>
        </div>
        <h1 className='flex flex-col justify-center items-center'>
          <p className={`dynamic-title text-${season.color}-highlight ${TheSeasons.className}`}>{season.title}</p>
          <p className={`dynamic-title  text-${season.color}-highlight ${TheSeasons.className}`}>
            {season.subtitle ? season.subtitle : ''}
          </p>
        </h1>
        <p className={`text-sm md:text-base pt-8 p-2 lg:pt-12 w-[95%] sm:w-4/5 md:w-2/3 lg:w-4/5 text-justify border-${season.color}-highlight text-${season.color}-highlight`}>Em raios solares sem aviso, não há asas que resistam e as folhas cairão — mesmo que ainda haja perfume de flor. O frio virá em complemento ao calor, e, assim como o rio que se congela e depois volta a correr com frescor, a pétala caída retornará à terra para dar força a outra cor. Por isso, eu morreria sem temor, pois tudo é real, está certo e há amor.</p>
      </main>

      <section
        onClick={handleNextSeason}
        className={`relative md:w-60 md:h-full h-28 w-full md:border-b md:border-r-0 border-${season.color}-highlight border-t border-l border-r flex items-center justify-center overflow-hidden`}
      >
        {prevSeason ? renderImage(prevSeason.images[1], `${prevSeason.key}-2`, false) : null}
        {renderImage(season.images[1], `${season.key}-2`, true)}
      </section>
    </div>
  );
}
