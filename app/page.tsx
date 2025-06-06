'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Component() {
  const [season, setSeason] = useState<'winter' | 'summer' | 'autumn' | 'spring'>('winter');
  const [isScrolling, setIsScrolling] = useState(false);

  const seasons = ['winter', 'summer', 'autumn', 'spring'] as const;
  
  const seasonTexts = {
    winter: {
      title: 'Inverno',
      subtitle: 'A estação do frio',
      description: 'O inverno é a estação mais fria do ano, caracterizada por temperaturas baixas, dias mais curtos e noites mais longas. É um período de introspecção e aconchego, onde a natureza se prepara para um novo ciclo.'
    },
    summer: {
      title: 'Verão',
      subtitle: 'A estação do calor',
      description: 'O verão é a estação mais quente do ano, com dias longos e ensolarados. É um período de energia, vitalidade e atividades ao ar livre, onde a natureza está em seu auge de exuberância.'
    },
    autumn: {
      title: 'Outono',
      subtitle: 'A estação das folhas',
      description: 'O outono é a estação da transição, onde as folhas mudam de cor e caem, preparando a natureza para o inverno. É um período de transformação e reflexão, com temperaturas amenas e paisagens douradas.'
    },
    spring: {
      title: 'Primavera',
      subtitle: 'A estação das flores',
      description: 'A primavera é a estação do renascimento, onde a natureza desperta do inverno. É um período de renovação, com flores desabrochando, temperaturas amenas e dias mais longos, anunciando a chegada do verão.'
    }
  };

  const seasonImages1 = {
    winter: '/images/winter 1.png',
    summer: '/images/summer 1.png',
    autumn: '/images/autumn 1.png',
    spring: '/images/spring 1.png',
  };
  const seasonImages2 = {
    winter: '/images/winter 2.png',
    summer: '/images/summer 2.png',
    autumn: '/images/autumn 2.png',
    spring: '/images/spring 2.png',
  };
  
  const handlePreviousSeason = () => {
    const currentIndex = seasons.indexOf(season);
    const previousIndex = (currentIndex - 1 + seasons.length) % seasons.length;
    setSeason(seasons[previousIndex]);
  };

  const handleNextSeason = () => {
    const currentIndex = seasons.indexOf(season);
    const nextIndex = (currentIndex + 1) % seasons.length;
    setSeason(seasons[nextIndex]);
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);
      
      if (event.deltaY > 0) {
        handleNextSeason();
      } else {
        handlePreviousSeason();
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [season, isScrolling]);

  const seasonIcon = {
    winter: '/icons/winter.svg',
    summer: '/icons/summer.svg',
    autumn: '/icons/autumn.svg',
    spring: '/icons/spring.svg',
  };

  return (
    <div className={`md:flex-row md:py-12 md:px-0 px-6 flex flex-col items-center justify-between h-screen bg-${season}-background`}>
      <section 
        onClick={handlePreviousSeason} 
        className={`md:w-40 md:h-full h-28 w-full md:border-t md:border-l-0 border-${season}-highlight border-b border-r border-l cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity relative overflow-hidden`}
      >
        <Image src={seasonImages1[season]} alt={season} fill style={{objectFit: 'cover'}} />
      </section>
      <main className={`md:m-12 m-6 size-full border border-${season}-highlight flex flex-col items-center justify-center`}>
        <div className="flex items-center gap-3">
          <span className={`text-sm border-${season}-highlight`}>09</span>
          <Image src={seasonIcon[season]} alt={season} width={70} height={70} />
          <span className={`text-sm border-${season}-highlight`}>06</span>
        </div>
        <h1 className="text-2xl font-bold">{seasonTexts[season].title}</h1>
        <h2 className="text-xl mb-4">{seasonTexts[season].subtitle}</h2>
        <p className={`md:max-w-2/3 px-8 text-md text-justify border-${season}-highlight`}>{seasonTexts[season].description}</p>
      </main>
      <section 
        onClick={handleNextSeason} 
        className={`md:w-40 md:h-full h-28 w-full md:border-b md:border-r-0 border-${season}-highlight border-t border-l border-r cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity relative overflow-hidden`}
      >
        <Image src={seasonImages2[season]} alt={season} fill style={{objectFit: 'cover'}} />
      </section>
    </div>
  )
}
