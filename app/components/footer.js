export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo or Name */}
        <div className="font-serif text-2xl md:text-3xl font-light">
          Lea Kis
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col gap-4 font-sans text-sm tracking-wide text-white/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#studios" className="hover:text-white transition">Studios</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right: Social or Note */}
        <div className="font-sans text-sm text-white/60 md:text-right">
          © {new Date().getFullYear()} Lea Kis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
