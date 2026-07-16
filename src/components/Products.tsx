import Image from 'next/image';

export default function Products() {
  return (
    <section aria-label="Products" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Shampoo */}
        <div className="bg-white min-h-screen flex items-center justify-center border-b border-black/10 md:border-b-0 md:border-r-[10px] md:border-black">
          <div className="w-full max-w-2xl px-6 py-16 flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[560px]">
              <Image
                src="/images/5bcdac3f76071d2a11133e78_Handwash-Bottle-Mockup.jpg"
                alt="Shampoo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-10 font-lato font-light uppercase tracking-[0.35em] text-3xl md:text-4xl text-black/25">
              SHAMPOO
            </div>
          </div>
        </div>

        {/* Créme */}
        <div className="bg-neutral-100 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-2xl px-6 py-16 flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[560px]">
              <Image
                src="/images/5bcdac3fd44cf4d6587178a0_crema-p-1080.png"
                alt="Créme"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-10 font-lato font-light uppercase tracking-[0.35em] text-3xl md:text-4xl text-black/25">
              CRÉME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
