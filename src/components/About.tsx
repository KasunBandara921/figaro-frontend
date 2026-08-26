export default function About() {
  return (
    <section id="about" className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full flex items-center justify-center px-6 lg:px-10 py-24">
        <div className="w-[70%] max-w-[1400px] border-l-2 border-[#333] pl-[55px] flex flex-col justify-center items-start">
          <div className="font-lato tracking-[5px] text-sm text-[#333] mt-[5px] mb-[10px]">
            OUR STORY
          </div>

          <h2 className="font-playfair text-[45px] leading-[65px] font-normal text-[#333] mb-8">About us</h2>

          <p className="font-playfair text-[22px] leading-[38px] text-[#333] mb-0">
            At Figaro, we believe grooming is an art form. Established with a passion for precision and a commitment to style, our salon is a sanctuary where modern techniques meet classic sophistication. Our team of dedicated master stylists is committed to crafting personalized experiences that enhance your natural character and style.
          </p>

          <p className="mt-5 font-playfair text-[22px] leading-[38px] text-[#333]">
            From precision haircuts and tailored styling to rich color transformations and signature beard grooming, we treat every service as a masterpiece.{' '}
            <strong className="font-bold">We don't just cut; we style</strong>, ensuring every visit is an indulgent retreat that leaves you looking and feeling your absolute best.
          </p>

          <div className="mt-[50px] w-full flex justify-end items-center">
            <div className="font-great-vibes text-[34px] leading-[40px] text-[#333]">Harald Knives</div>
          </div>
        </div>
      </div>
    </section>
  );
}
