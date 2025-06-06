'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const seasons = {
  winter: {
    key: 'winter',
    title: 'Inverno',
    subtitle: 'A estação do frio',
    description:
      'O inverno é a estação mais fria do ano, caracterizada por temperaturas baixas, dias mais curtos e noites mais longas. É um período de introspecção e aconchego, onde a natureza se prepara para um novo ciclo.',
    images: ['/images/winter 1.png', '/images/winter 2.png'],
    icon: '/icons/winter.png',
    color: 'winter',
  },
  summer: {
    key: 'summer',
    title: 'Verão',
    subtitle: 'A estação do calor',
    description:
      'O verão é a estação mais quente do ano, com dias longos e ensolarados. É um período de energia, vitalidade e atividades ao ar livre, onde a natureza está em seu auge de exuberância.',
    images: ['/images/summer 1.png', '/images/summer 2.png'],
    icon: '/icons/summer.png',
    color: 'summer',
  },
  autumn: {
    key: 'autumn',
    title: 'Outono',
    subtitle: 'A estação das folhas',
    description:
      'O outono é a estação da transição, onde as folhas mudam de cor e caem, preparando a natureza para o inverno. É um período de transformação e reflexão, com temperaturas amenas e paisagens douradas.',
    images: ['/images/autumn 1.png', '/images/autumn 2.png'],
    icon: '/icons/autumn.png',
    color: 'autumn',
  },
  spring: {
    key: 'spring',
    title: 'Primavera',
    subtitle: 'A estação das flores',
    description:
      'A primavera é a estação do renascimento, onde a natureza desperta do inverno. É um período de renovação, com flores desabrochando, temperaturas amenas e dias mais longos, anunciando a chegada do verão.',
    images: ['/images/spring 1.png', '/images/spring 2.png'],
    icon: '/icons/spring.png',
    color: 'spring',
  },
} as const;

const seasonKeys = Object.keys(seasons) as (keyof typeof seasons)[];

export default function Component() {
  const [seasonKey, setSeasonKey] = useState<keyof typeof seasons>('winter');
  const [isScrolling, setIsScrolling] = useState(false);

  const season = seasons[seasonKey];

  const handlePreviousSeason = () => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const previousIndex = (currentIndex - 1 + seasonKeys.length) % seasonKeys.length;
    setSeasonKey(seasonKeys[previousIndex]);
  };

  const handleNextSeason = () => {
    const currentIndex = seasonKeys.indexOf(seasonKey);
    const nextIndex = (currentIndex + 1) % seasonKeys.length;
    setSeasonKey(seasonKeys[nextIndex]);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);

      event.deltaY > 0 ? handleNextSeason() : handlePreviousSeason();

      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [seasonKey, isScrolling]);

  return (
    <div
      className={`md:flex-row md:py-12 md:px-0 px-6 flex flex-col items-center justify-between h-screen bg-${season.color}-background`}
    >
      <section
        onClick={handlePreviousSeason}
        className={`md:w-40 md:h-full h-28 w-full md:border-t md:border-l-0 border-${season.color}-highlight border-b border-r border-l cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity relative overflow-hidden`}
      >
        <Image
          key={`${season.key}-1`}
          src={season.images[0]}
          alt={season.title}
          fill
          style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
        />
      </section>
      <main
        className={`md:m-12 m-6 size-full border border-${season.color}-highlight flex flex-col items-center justify-center`}
      >
        <div className="flex items-center gap-3">
          <span className={`text-sm border-${season.color}-highlight`}>09</span>
          <Image src={season.icon} alt={season.title} width={70} height={70} />
          <span className={`text-sm border-${season.color}-highlight`}>06</span>
        </div>
        <h1 className="text-2xl font-bold">{season.title}</h1>
        <h2 className="text-xl mb-4">{season.subtitle}</h2>
        <p
          className={`md:max-w-2/3 px-8 text-md text-justify border-${season.color}-highlight`}
        >
          {season.description}
        </p>
      </main>
      <section
        onClick={handleNextSeason}
        className={`md:w-40 md:h-full h-28 w-full md:border-b md:border-r-0 border-${season.color}-highlight border-t border-l border-r cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity relative overflow-hidden`}
      >
        <Image
          key={`${season.key}-2`}
          src={season.images[1]}
          alt={season.title}
          fill
          style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
        />
      </section>
    </div>
  );
}
