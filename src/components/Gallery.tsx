import Link from 'next/link'

const FIGARO_LOGO = '/images/5bcdac3e39ce885ebea26893_figaro%20LOGO_white.svg'
const DISCOVER_HREF = '#services'

function HoverOverlay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <img src={FIGARO_LOGO} width={155} height={44} alt="Figaro" className="opacity-80 mb-2" />
      <Link href={DISCOVER_HREF} className="font-playfair text-[22px] text-red-500 hover:text-red-400 transition-colors">
        Discover →
      </Link>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="bg-black min-h-screen px-6 py-16 md:p-20 flex items-center justify-center">
      <div className="grid w-full max-w-[1400px] gap-4 grid-cols-1 md:grid-cols-3 md:[grid-template-rows:auto_auto_auto]">
        {/* Center block (only on md+) */}
        <div className="hidden md:flex md:[grid-area:1/2/2/3] h-full min-h-[700px] items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="grid w-full h-full grid-cols-1 [grid-template-rows:auto_1fr]">
              <div className="bg-neutral-950 w-full p-[30px] flex flex-col items-center justify-center">
                <p className="font-playfair text-white text-center text-[24px] leading-[32px]">A great look needs great hair</p>
                <Link href={DISCOVER_HREF} className="mt-2 font-playfair text-[22px] text-red-500 hover:text-red-400 transition-colors">
                  Discover →
                </Link>
              </div>
              <div
                className="group relative w-full h-full min-h-[150px] bg-center bg-cover"
                style={{ backgroundImage: "url('/images/5bcdabf61740e3568ebb4b18_2.jpg')" }}
              >
                <HoverOverlay />
              </div>
            </div>
          </div>
        </div>

        {/* Left image */}
        <div
          className="group relative md:[grid-area:1/1/2/2] w-full min-h-[420px] md:min-h-[700px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/5bcdabfa39ce887847a26792_12.jpg')" }}
        >
          <HoverOverlay />
        </div>

        {/* Right image */}
        <div
          className="group relative md:[grid-area:1/3/2/4] w-full min-h-[420px] md:min-h-[700px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/5bcdabf639ce881e58a2678d_3.jpg')" }}
        >
          <HoverOverlay />
        </div>

        {/* Grid text */}
        <div className="md:[grid-area:2/1/3/2] w-full bg-neutral-950 p-[55px] flex flex-col items-start justify-center">
          <p className="font-playfair text-white text-[18px] leading-[32px] opacity-90">
            Leave your thoughts at home and let us take care of your beauty.
          </p>
          <div className="mt-2 font-great-vibes text-[34px] leading-[40px] text-white opacity-95">Harald Knives</div>
        </div>

        {/* Middle image */}
        <div
          className="group relative md:[grid-area:2/2/3/3] w-full min-h-[320px] md:min-h-[500px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/5bcdac3ee34e5a69a5814a12_Mockup.jpg')" }}
        >
          <HoverOverlay />
        </div>

        {/* Right middle image */}
        <div
          className="group relative md:[grid-area:2/3/3/4] w-full min-h-[320px] md:min-h-[500px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/5bcdabf60508ef4a0e7c7d07_7.jpg')" }}
        >
          <HoverOverlay />
        </div>

        {/* Bottom large image spanning 2 cols */}
        <div
          className="group relative md:[grid-area:3/1/4/3] w-full min-h-[320px] md:h-[500px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/5bcdabf679f044618cc9be9e_8.jpg')" }}
        >
          <HoverOverlay />
        </div>

        {/* Products block */}
        <div className="md:[grid-area:3/3/4/4] w-full bg-neutral-950 p-10 flex flex-col items-center justify-center md:h-[500px]">
          <img
            src="/images/5bcdac0d39ce881666a267a6_rasoio.svg"
            width={148}
            height={148}
            alt="Products"
            className="opacity-80"
          />
          <h3 className="mt-4 font-lato text-white uppercase tracking-[5px] text-[22px] font-light leading-[40px]">products</h3>
          <Link href={DISCOVER_HREF} className="mt-2 font-playfair text-[22px] text-red-500 hover:text-red-400 transition-colors">
            Discover →
          </Link>
        </div>
      </div>
    </section>
  )
}
