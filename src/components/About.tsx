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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante.{' '}
            <em className="italic">Amet venenatis urna cursus eget nunc scelerisque viverra.</em> Auctor neque vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit.
          </p>

          <p className="mt-5 font-playfair text-[22px] leading-[38px] text-[#333]">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore{' '}
            </span>
            <span className="underline underline-offset-4 decoration-black/60">et dolore magna aliqua.</span>
            <span>
              {' '}
              Risus pretium quam vulputate dignissim suspendisse in est ante. Amet venenatis urna cursus eget nunc scelerisque viverra.{' '}
            </span>
            <strong className="font-bold">Auctor neque vitae tempus quam pellentesque nec nam.</strong>
            <span>
              {' '}
              Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit scelerisque in. Dignissim sodales ut eu sem integer vitae justo eget magna.
            </span>
          </p>

          <div className="mt-[50px] w-full flex justify-end items-center">
            <div className="font-great-vibes text-[34px] leading-[40px] text-[#333]">Harald Knives</div>
          </div>
        </div>
      </div>
    </section>
  );
}
