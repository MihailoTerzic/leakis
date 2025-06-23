import Image from 'next/image';

export default function Philosophy() {
  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-black text-white">
      {/* Background image */}
      <Image
        src="/images/img1.jpg" // Replace with your actual image path
        alt="Philosophy Background"
        fill
        className="object-cover filter grayscale"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 h-full flex flex-col justify-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8">
          My Philosophy
        </h2>
        <p className="font-sans text-white/80 text-base md:text-lg leading-loose tracking-wide">
          We believe in thoughtful design, intentional movement, and the power of simplicity. 
          Our approach centers around creating an atmosphere where clients feel supported, 
          focused, and inspired to evolve — mentally and physically.
        </p>
      </div>
    </section>
  );
}
