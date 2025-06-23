'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const studios = [
  {
    title: 'Nutrition & Recipes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/images/img2.jpg',
    imgAlt: 'Personal Training Studio',
  },
  {
    title: 'Online Coaching',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/images/img3.jpg',
    imgAlt: 'Nutrition & Wellness Lab',
  },
  {
    title: 'Fitness & Lifestyle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/images/img4.jpg',
    imgAlt: 'Mindfulness Room',
  },
];

export default function ServicesResponsive() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollLength, setScrollLength] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and calculate scroll length
  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile && scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const extraBuffer = viewportWidth * 0.5;
        const newScrollLength = scrollWidth > viewportWidth
          ? scrollWidth - viewportWidth + extraBuffer
          : 0;
        setScrollLength(newScrollLength);
      } else {
        setScrollLength(0);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Scroll sync logic
  useEffect(() => {
    if (!isMobile || !scrollLength) return;

    const handleScroll = () => {
      const container = containerRef.current;
      const scrollEl = scrollRef.current;
      if (!container || !scrollEl) return;

      const scrollTop = window.scrollY;
      const offsetTop = container.offsetTop;

      if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollLength) {
        scrollEl.scrollLeft = scrollTop - offsetTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, scrollLength]);

  return (
    <>
      {/* Mobile Scrolljacking */}
      <div
        ref={containerRef}
        className={`relative bg-white md:hidden py-24`}
        style={{ height: isMobile ? `${scrollLength + window.innerHeight}px` : 'auto' }}
      >
        <div className="sticky top-0 h-screen px-6 flex items-start">
          <div className="w-full">
            <h2 className="font-serif text-3xl font-light leading-tight mb-10 text-black">Services</h2>
            <div ref={scrollRef} className="flex gap-6 overflow-hidden">
              {studios.map(({ title, description, imgSrc, imgAlt }) => (
                <div key={title} className="flex-shrink-0 w-[85vw] flex flex-col">
                  <div className="relative h-[620px] overflow-hidden mb-4">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      fill
                      sizes="85vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="font-serif text-xl font-light text-black mb-2 text-end">
                    {title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed tracking-wide text-end max-w-sm ml-auto">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <section className="hidden md:block py-24 px-6 max-w-7xl mx-auto bg-white">
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-10 md:mb-12 text-black">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {studios.map(({ title, description, imgSrc, imgAlt }) => (
            <div key={title} className="flex flex-col">
              <div className="relative h-[600px] overflow-hidden mb-6">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="font-serif text-3xl font-light text-black mb-2 text-end">
                {title}
              </h3>
              <p className="font-sans text-gray-600 text-base leading-relaxed tracking-wide text-end max-w-md ml-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
