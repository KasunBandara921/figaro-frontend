export default function Locations() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/5bcf23a800ba18da2d868ae4_New%20York%20City%20-%201044-poster-00001.jpg"
      >
        <source src="/videos/nyc-transcode.mp4" type="video/mp4" />
      </video>

      <div id="locations" className="relative flex h-screen w-full items-center justify-center bg-black/85">
        <div className="flex w-[95%] max-w-[1400px] flex-col items-center justify-center lg:flex-row lg:items-stretch">
          {/* New York */}
          <div className="mb-[40px] flex min-w-[200px] flex-col items-start justify-center border border-white p-[30px] text-white lg:mb-0 lg:mr-[10px]">
            <h3 className="font-playfair text-[38px] font-normal leading-[40px]">New York</h3>
            <p className="font-playfair text-[20px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <ul className="mt-[30px] w-full list-none p-0">
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">244 Avenue</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">+39 67 7378 383</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">newyork@figaro.com</div>
              </li>
            </ul>
          </div>

          {/* Milan */}
          <div className="mb-[40px] flex min-w-[200px] flex-col items-start justify-center border border-white p-[30px] text-white lg:mb-0 lg:mr-[10px]">
            <h3 className="font-playfair text-[38px] font-normal leading-[40px]">Milan</h3>
            <p className="font-playfair text-[20px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <ul className="mt-[30px] w-full list-none p-0">
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">Via A. Moro, 54</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">+345 67 7378 383</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">milan@figaro.com</div>
              </li>
            </ul>
          </div>

          {/* Los Angeles */}
          <div className="flex min-w-[200px] flex-col items-start justify-center border border-white p-[30px] text-white">
            <h3 className="font-playfair text-[38px] font-normal leading-[40px]">Los Angeles</h3>
            <p className="font-playfair text-[20px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <ul className="mt-[30px] w-full list-none p-0">
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">235 Beverly Hills</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">+798 67 7378 383</div>
              </li>
              <li className="mb-[40px]">
                <div className="font-playfair text-[18px] leading-[25px]">la@figaro.com</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
