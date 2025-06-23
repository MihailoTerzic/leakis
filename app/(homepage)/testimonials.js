export default function Testimonials() {
  const testimonials = [
    {
      text: "Working with Lea transformed not just my body, but my mindset. Calm, intentional, and truly personal.",
      name: "Ana M.",
    },
    {
      text: "The atmosphere is unlike any other. Clean, focused, and deeply human — every session is a reset.",
      name: "Maja T.",
    },
    {
      text: "Elegant, quiet, and powerful. I’ve never felt so aligned, both physically and mentally.",
      name: "Ivana R.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl md:text-5xl font-light text-black leading-tight mb-12 text-center md:text-left">
        Whispers of Trust
      </h2>

      {/* Container switches layout based on screen size */}
      <div
        className="
          flex gap-8 overflow-x-auto snap-x snap-mandatory
          scrollbar-none
          md:flex-row
          lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible
        "
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {testimonials.map(({ text, name }, index) => (
          <article
            key={index}
            className="
              snap-start flex-shrink-0 w-[75vw]
              md:w-[50vw]
              lg:w-auto
              flex flex-col justify-between
            "
            style={{ scrollSnapAlign: 'start' }}
          >
            <p className="font-serif text-xl md:text-2xl text-black/90 leading-relaxed italic mb-4">
              “{text}”
            </p>
            <p className="font-sans text-sm text-black/60 tracking-wide uppercase text-end">
              {name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
