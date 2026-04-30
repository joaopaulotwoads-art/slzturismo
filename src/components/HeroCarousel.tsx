import { useState, useEffect, useCallback } from 'react';

interface Slide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    src: '/images/carrosel-1.jpeg',
    alt: 'Veículo off-road nas dunas brancas dos Lençóis Maranhenses com lagoa azul',
    title: 'Explore o Paraíso',
    subtitle: 'Descubra os Lençóis Maranhenses e as belezas naturais de São Luís',
  },
  {
    src: '/images/carrosel-2.jpeg',
    alt: 'Lancha voadeira na praia de Caburé com coqueiros e mar cristalino',
    title: 'Aventura no Rio Preguiças',
    subtitle: 'Navegue pelo Rio Preguiças e conheça praias paradisíacas',
  },
  {
    src: '/images/carrosel-3.jpeg',
    alt: 'Lagoa cristalina entre dunas brancas no Parque Nacional dos Lençóis Maranhenses',
    title: 'Lagoas Cristalinas',
    subtitle: 'Banhe-se nas lagoas de água doce entre dunas de areia branca',
  },
  {
    src: '/images/carrosel-4.jpeg',
    alt: 'Pôr do sol dourado sobre lagoa e dunas nos Lençóis Maranhenses',
    title: 'Pôr do Sol Inesquecível',
    subtitle: 'Contemple o pôr do sol mais bonito do Brasil',
  },
  {
    src: '/images/carrosel-5.jpeg',
    alt: 'Vista aérea dos Lençóis Maranhenses com dunas e lagoas turquesa',
    title: 'Vista Aérea dos Lençóis',
    subtitle: 'Um espetáculo da natureza visto de cima',
  },
  {
    src: '/images/carrosel-6.jpeg',
    alt: 'Lagoa azul turquesa com dunas brancas ao fundo nos Lençóis Maranhenses',
    title: 'Lagoa Azul',
    subtitle: 'O circuito mais famoso dos Lençóis Maranhenses',
  },
  {
    src: '/images/carrosel-7.jpeg',
    alt: 'Lagoa com pessoas caminhando nas dunas ao entardecer nos Lençóis Maranhenses',
    title: 'Momentos Inesquecíveis',
    subtitle: 'Viva experiências únicas com a SLZ Turismo — Desde 2009',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Carrossel de imagens dos passeios"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={index !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding={index === 0 ? 'sync' : 'async'}
            width={1920}
            height={1080}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl transition-all duration-500"
            key={`title-${current}`}
          >
            {slides[current].title}
          </h1>
          <p
            className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg"
            key={`subtitle-${current}`}
          >
            {slides[current].subtitle}
          </p>
          <p className="mt-3 text-base sm:text-lg italic text-white/70 drop-shadow-lg">
            Conheça com quem conhece! <span className="not-italic font-semibold text-primary">Desde 2009</span>
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#passeios"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary-dark hover:shadow-primary/60 hover:-translate-y-1 hover:scale-105"
            >
              Ver Passeios
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="https://wa.me/5598983044843?text=Olá! Gostaria de saber mais sobre os passeios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all hover:bg-white/20 hover:-translate-y-1"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'h-3 w-10 bg-primary shadow-lg shadow-primary/50'
                : 'h-3 w-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white transition-all hover:bg-black/50 hover:scale-110 sm:left-6 sm:h-14 sm:w-14"
        aria-label="Slide anterior"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => next()}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white transition-all hover:bg-black/50 hover:scale-110 sm:right-6 sm:h-14 sm:w-14"
        aria-label="Próximo slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 z-20 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
