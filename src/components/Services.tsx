export default function Services() {
  const services = [
    {
      id: 'hair-styling',
      title: 'haiR styling',
      iconSrc: '/images/5bcdac071fb209989bc6a0ef_boy-hair-shape.svg',
    },
    {
      id: 'scalp-massage',
      title: 'scalp massage',
      iconSrc: '/images/5bcf4b86dba98ddefb93e09e_hand0.svg',
    },
    {
      id: 'edge-up',
      title: 'edge up',
      iconSrc: '/images/5bcdac07d44cf416ba71788e_hairdryer-silhouette-side-view.svg',
    },
    {
      id: 'hair-cut',
      title: 'HAIR CUT',
      iconSrc: '/images/5bcdac070508efc0577c7d76_chair-side-view-silhouette.svg',
    },
    {
      id: 'beard-trim',
      title: 'beard trim',
      iconSrc: '/images/5bcdac0739ce880525a2679c_razor-hair-salon-tool.svg',
    },
    {
      id: 'coloring',
      title: 'COLORING',
      iconSrc: '/images/5bcdac0779f044bab2c9bea9_hair-salon-spray-bottle-and-can.svg',
    },
  ] as const

  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const priceParagraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const whiteOffer = [
    { label: 'Male cut', price: '$18' },
    { label: 'Kid cut', price: '$14' },
    { label: 'Color', price: '$39' },
    { label: 'Beard trim', price: '$9' },
  ] as const

  const blackOffer = [
    { label: 'Highlights', price: '$59' },
    { label: 'Wax (eye brown/lips)', price: '$7' },
    { label: 'Shave', price: '$9' },
    { label: 'Scalp Massage', price: '$29' },
  ] as const

  return (
    <section id="services" className="bg-white min-h-screen px-6 py-16 lg:p-[100px] flex flex-col items-center justify-center">
      <h2 className="font-playfair text-[40px] leading-[52px] sm:text-[45px] sm:leading-[65px] font-normal text-neutral-800 mb-[50px]">
        Our Services
      </h2>

      <div className="grid w-full max-w-[1400px] gap-4 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-[5px] bg-neutral-50/60 p-10 shadow-[1px_1px_12px_rgba(0,0,0,0.08)] flex flex-col items-start justify-center"
          >
            <img src={service.iconSrc} width={25} height={25} alt="" className="mb-6" />
            <h3 className="font-lato text-[18px] leading-[40px] tracking-[5px] uppercase font-light text-neutral-800 mb-0">
              {service.title}
            </h3>
            <p className="mt-3 font-playfair text-[16px] leading-[30px] text-neutral-500 max-w-[700px]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[100px] w-full flex justify-center">
        <p className="w-[70%] max-w-[1400px] font-playfair text-[22px] leading-[38px] text-neutral-800 text-center">
          {priceParagraph}
        </p>
      </div>

      <div className="mt-[100px] w-[85%] max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* White Offer (left) */}
        <div className="border border-neutral-200 min-h-[500px] p-[30px] flex flex-col items-start">
          <h3 className="font-playfair text-neutral-800 text-[35px] leading-[50px] font-normal">White Offer</h3>
          <div className="w-[150px] h-px bg-neutral-200 my-5" />
          <div className="font-lato tracking-[5px] text-neutral-800 mt-[5px] mb-[10px] text-sm">MON - WED</div>

          <ul className="w-full mt-[30px] p-0 m-0 list-none">
            {whiteOffer.map((item) => (
              <li key={item.label} className="w-full mb-[40px] last:mb-0">
                <div className="flex items-center justify-between mr-[50px]">
                  <div className="font-playfair text-neutral-800 text-[18px] leading-[25px]">{item.label}</div>
                  <div className="font-playfair text-neutral-800 text-[20px] leading-[30px]">{item.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Black Offer (right) */}
        <div className="bg-black min-h-[500px] p-[30px] flex flex-col items-start">
          <h3 className="font-playfair text-white text-[35px] leading-[50px] font-normal">Black Offer</h3>
          <div className="w-[150px] h-px bg-neutral-200 my-5" />
          <div className="font-lato tracking-[5px] text-white mt-[5px] mb-[10px] text-sm">THU - SAT</div>

          <ul className="w-full mt-[30px] p-0 m-0 list-none">
            {blackOffer.map((item) => (
              <li key={item.label} className="w-full mb-[40px] last:mb-0">
                <div className="flex items-center justify-between mr-[50px]">
                  <div className="font-playfair text-white text-[20px] leading-[25px]">{item.label}</div>
                  <div className="font-playfair text-white text-[20px] leading-[25px]">{item.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
