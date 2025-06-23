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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-black leading-tight mb-12">
          Testimonials
        </h2>

        <div
          className="
            flex gap-8 overflow-x-auto snap-x snap-mandatory 
            scrollbar-none 
            md:overflow-visible md:flex-row
          "
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map(({ text, name }, index) => (
            <article
              key={index}
              className="
                snap-start flex-shrink-0 w-[75vw] md:w-1/3
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
      </div>
    </section>
  );
}
