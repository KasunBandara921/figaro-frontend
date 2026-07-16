import Link from 'next/link'

export default function Parallax() {
  return (
    <section
      className="flex h-[70vh] w-full flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/5bcdabfa1fb2095c15c6a0e0_13.jpg')",
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
        backgroundAttachment: 'scroll, fixed',
        backgroundPosition: '0 0, 50% 50%',
      }}
    >
      <div className="flex w-[70%] max-w-[1400px] flex-col items-center justify-start text-center">
        <h2 className="font-playfair text-[45px] font-normal leading-[65px] text-white">You're unique</h2>
        <p className="mt-4 font-playfair text-[22px] leading-[38px] text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Risus pretium quam vulputate dignissim suspendisse in est ante. <em>Amet venenatis urna cursus eget nunc scelerisque viverra.</em>
        </p>
        <Link
          href="#services"
          className="mt-[10px] font-playfair text-[22px] text-red-500 hover:text-red-400 transition-transform duration-200 hover:translate-x-[3px]"
        >
          Discover →
        </Link>
      </div>
    </section>
  )
}
