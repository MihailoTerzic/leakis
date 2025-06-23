export default function CallToAction() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-black leading-tight mb-6">
          Let’s Work Together
        </h2>
        <p className="font-sans text-gray-600 md:text-lg leading-relaxed tracking-wide mb-10">
          Whether you’re looking to refine your brand, elevate your digital presence, 
          or craft something entirely new — we’re here to bring clarity and craftsmanship to every detail.
        </p>

        {/* Elegant Contact Form */}
        <form className="space-y-8">
          <div>
            <label className="block font-sans text-gray-700 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full bg-gray-100 rounded-xl px-6 py-4 placeholder-gray-400 text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block font-sans text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-gray-100 rounded-xl px-6 py-4 placeholder-gray-400 text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block font-sans text-gray-700 text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Tell us a bit about your project..."
              className="w-full bg-gray-100 rounded-xl px-6 py-4 placeholder-gray-400 text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="font-sans text-white bg-black px-8 py-3 rounded-full text-sm tracking-wide hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
