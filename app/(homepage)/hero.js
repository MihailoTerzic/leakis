import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-[100svh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100svh] bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end md:pl-20 h-full md:h-full text-white px-4 font-serif">
        <h1 className="text-7xl md:text-9xl leading-none">
          <div>Lea Kis</div>
        </h1>
      </div>
    </section>
  )
}
