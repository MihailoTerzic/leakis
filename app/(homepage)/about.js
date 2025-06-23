export default function About() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif hidden text-3xl md:text-5xl font-light leading-tight mb-6 md:mb-8 text-black">
          About Lea 
        </h2>
        <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed tracking-wide">
           A personal trainer dedicated to refining the art of holistic fitness.  
          Through a minimalist approach, she empowers clients to elevate their wellbeing with precision, grace, and balance.
        </p>

        <div className="flex md:justify-center  mt-10">
          <button className="font-sans text-white bg-black px-8 py-3 rounded-full text-sm tracking-wide hover:opacity-80 transition">
            View my work
          </button>
        </div>
      </div>

       
    </section>
  );
}