'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="top-website" className="relative min-h-screen pt-20 overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/5bcdabf679f04442a8c9be9d_4.jpg"
          alt="Figaro Salon hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      {/* Foreground layout (matches original Webflow structure) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 min-h-[calc(100vh-5rem)] grid grid-cols-12 grid-rows-[1fr_auto] gap-x-10 py-12">
        {/* Left black banner (services) */}
        <div className="hidden md:block col-span-12 md:col-span-3 row-start-1 self-start">
          <div className="bg-black/60 backdrop-blur-sm px-10 py-10 w-[280px]">
            <Image
              src="/images/5bcdd74876071d68f0138256_5.svg"
              alt=""
              width={50}
              height={50}
              className="mb-4"
            />
            <div className="font-playfair text-lg mb-3">Hair Styling</div>
            <div className="text-sm text-white/70 space-y-1">
              <div>Haircut</div>
              <div>Hair coloring</div>
              <div>Highlights</div>
            </div>

            <div className="mt-10" />

            <Image
              src="/images/5bcdd7489f4e0e4a256dca46_4.svg"
              alt=""
              width={50}
              height={50}
              className="mb-4"
            />
            <div className="font-playfair text-lg mb-3">Beard Styling</div>
            <div className="text-sm text-white/70 space-y-1">
              <div>Beard coloring</div>
              <div>Shave</div>
              <div>Beard trim</div>
            </div>
          </div>
        </div>

        {/* Center play button */}
        <div className="hidden lg:flex col-span-12 lg:col-span-6 row-start-1 self-start justify-center pt-20">
          <a
            href="https://www.youtube.com/watch?v=eZANSfWqpVk"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="Play video"
          >
            <Image
              src="/images/5bcdc56b9f4e0e4f2e6db54c_play-button.svg"
              alt=""
              width={65}
              height={65}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Right white banner (testimonial) */}
        <div className="hidden md:block col-span-12 md:col-span-4 lg:col-span-3 row-start-1 self-start justify-self-end">
          <div className="bg-white/10 backdrop-blur-sm px-10 py-10 w-[360px]">
            <Image
              src="/images/5bcdd747d44cf472bb71b1b2_2.svg"
              alt=""
              width={68}
              height={68}
              className="mb-6"
            />
            <div className="h-px w-16 bg-white/25 mb-6" />
            <p className="font-lora text-sm leading-6 text-white/90 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="font-great-vibes text-2xl text-white/90">Alfred Hordberg</div>
          </div>
        </div>

        {/* Bottom row: social (left) */}
        <div className="hidden lg:flex col-span-12 lg:col-span-3 row-start-2 self-end items-center gap-4 pb-10">
          <a href="https://www.facebook.com/udesly/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCcuEG-IjaeHRgePmiJ0f8GA" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>
          <a href="https://twitter.com/udesly_com" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 0 1-9-5.5z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/udesly_official/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.558-2.353 1.294-.735.735-1.03 1.574-1.297 2.353-.266.788-.467 1.658-.527 2.936C.04 8.333.024 8.74 0 12c0 3.26.015 3.667.072 4.947.06 1.277.261 2.148.527 2.936.264.779.559 1.618 1.297 2.353.735.735 1.574 1.03 2.353 1.297.788.266 1.658.467 2.936.527C8.333 23.96 8.74 23.976 12 23.976c3.26 0 3.667-.015 4.947-.072 1.277-.06 2.148-.261 2.936-.527.79-.264 1.618-.559 2.353-1.297.735-.735 1.03-1.574 1.298-2.353.266-.788.467-1.658.527-2.936.048-1.28.061-1.687.061-4.947 0-3.26-.015-3.667-.072-4.947-.06-1.277-.261-2.148-.527-2.936-.264-.779-.559-1.618-1.297-2.353-.735-.735-1.574-1.03-2.353-1.297-.788-.266-1.658-.467-2.936-.527C15.667.048 15.26.035 12 .035zm0 2.152c3.182 0 3.56.01 4.823.07 1.064.057 1.642.24 2.025.399.51.196.873.461 1.256.844.383.383.648.746.844 1.256.16.383.342.96.399 2.025.06 1.263.07 1.641.07 4.823 0 3.182-.01 3.56-.07 4.823-.057 1.064-.24 1.642-.399 2.025-.196.51-.461.873-.844 1.256-.383.383-.746.648-1.256.844-.383.16-.96.342-2.025.399-1.263.06-1.641.07-4.823.07-3.182 0-3.56-.01-4.823-.07-1.064-.057-1.642-.24-2.025-.399-.51-.196-.873-.461-1.256-.844-.383-.383-.648-.746-.844-1.256-.16-.383-.342-.96-.399-2.025-.06-1.263-.07-1.641-.07-4.823 0-3.182.01-3.56.07-4.823.057-1.064.24-1.642.399-2.025.196-.51.461-.873.844-1.256.383-.383.746-.648 1.256-.844.383-.16.96-.342 2.025-.399 1.263-.06 1.641-.07 4.823-.07z" />
              <circle cx="12" cy="12" r="3.846" />
              <circle cx="18.461" cy="5.539" r=".921" />
            </svg>
          </a>
          <a href="https://webflow.com/udesly" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors" aria-label="Webflow">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.1 8.2c-.2 0-.4.1-.6.2-1.5 1-3.3 1.5-5.2 1.5-1.1 0-2.1-.2-3-.6v3.7c0 2-1.6 3.6-3.6 3.6-.7 0-1.4-.2-2-.6l1.4-4.2c.1-.4.5-.7.9-.7.5 0 .9.4.9.9v.1l-.4 1.3c.2.1.4.1.6.1.9 0 1.6-.7 1.6-1.6V6.2c0-.4.3-.8.7-.9.4-.1.8 0 1.1.3 1.1 1.1 2.7 1.8 4.8 1.8 2.3 0 3.9-.8 4.8-1.6.3-.3.7-.4 1.1-.2.4.1.6.5.6.9v8.5c0 3-2.4 5.4-5.4 5.4-2.7 0-4.9-1.9-5.3-4.4h2.1c.3 1.4 1.6 2.4 3.2 2.4 1.9 0 3.4-1.5 3.4-3.4V9.1c-.4.1-.7.1-1.1.1Z" />
            </svg>
          </a>
        </div>

        {/* Bottom row: headline block (right) */}
        <div className="col-span-12 lg:col-span-9 lg:col-start-4 row-start-2 self-end pb-10">
          <div className="flex items-start gap-8 max-w-4xl">
            <div className="hidden sm:block w-px bg-white/45 h-44" />
            <div className="text-left">
              <h1 className="font-playfair text-5xl md:text-6xl leading-tight mb-5 fade-in">
                We don’t cut, we style
              </h1>
              <p className="font-lora text-base md:text-lg text-white/70 leading-relaxed mb-6 fade-in">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <Link href="#services" className="font-lato text-red-500 hover:text-red-400 transition-colors fade-in">
                Discover →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
