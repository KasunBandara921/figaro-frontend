'use client'

import { useMemo, useState } from 'react'

type Stylist = {
  name: string
  role: string
  imageUrl: string
}

type Slide = {
  stylists: [Stylist, Stylist, Stylist]
}

function StylistCard({ stylist }: { stylist: Stylist }) {
  return (
    <div
      className={
        'group relative flex w-full min-w-[350px] min-h-[500px] cursor-pointer flex-col justify-end overflow-hidden rounded-[5px] bg-white shadow-[1px_1px_3px_rgba(0,0,0,0.26)] transition-transform duration-[400ms] ease-[cubic-bezier(0.55,0.085,0.68,0.53)] hover:-translate-y-[5px] hover:scale-[1.04]'
      }
      style={{
        backgroundImage: `url('${stylist.imageUrl}')`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex w-full min-h-[70px] items-center justify-center bg-white/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="font-playfair text-[18px] text-white">
          {stylist.name} - <span className="text-[15px] font-bold">{stylist.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Stylists() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        stylists: [
          {
            name: 'Ted Nordenstad',
            role: 'STYLIST/OWNER',
            imageUrl: '/images/5bcdac2c39ce887806a267b7_Ted%20Nordenstad.jpg',
          },
          {
            name: 'Hermes Nguyen',
            role: 'STYLIST',
            imageUrl: '/images/5bcdac2c1740e34216bb4b34_Hermes%20Nguyen.jpg',
          },
          {
            name: 'Stefan Iversen',
            role: 'STYLIST',
            imageUrl: '/images/5bcdac2c1fb20905a3c6a108_Stefan%20Iversen.jpg',
          },
        ],
      },
      {
        stylists: [
          {
            name: 'Andrea Jenner',
            role: 'STYLIST',
            imageUrl: '/images/5bcdac2c9f4e0eafa46d8dd0_Andrea%20Jenner.jpg',
          },
          {
            name: 'Peter Sandoval',
            role: 'COLOR TECHNICIAN',
            imageUrl: '/images/5bcdac2c1740e31d38bb4b33_Peter%20Sandoval.jpg',
          },
          {
            name: 'Markus LeQoc',
            role: 'SALON COORDINATOR',
            imageUrl: '/images/5bcdac22d44cf421af717894_Markus-LeQoc.jpg',
          },
        ],
      },
      {
        stylists: [
          {
            name: 'Erik Coverdale',
            role: 'RECEPTIONIST',
            imageUrl: '/images/5bcdac229f4e0e31306d8dcc_Erik-Coverdale.jpg',
          },
          {
            name: 'Bruce Halford',
            role: 'STYLIST',
            imageUrl: '/images/5bcdac2239ce88ee68a267af_Bruce-Halford.jpg',
          },
          {
            name: 'Matthias Berg',
            role: 'STYLIST',
            imageUrl: '/images/5bcdac2276071dcaeb133e65_Matthias-Berg.jpg',
          },
        ],
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="hidden lg:flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black p-[100px]">
      <div className="flex w-[70%] max-w-[1400px] flex-col items-start">
        <h2 className="font-playfair text-[45px] leading-[65px] font-normal text-white">Figaro's team</h2>

        <div className="mt-[100px] w-full max-w-[1200px]">
          <div className="w-full">
            <div className="overflow-visible">
              <div
                className="flex w-full transition-transform duration-500 ease-[ease]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0">
                    <div className="grid grid-cols-3 items-stretch gap-x-[20px]">
                      {slide.stylists.map((stylist) => (
                        <StylistCard key={stylist.name} stylist={stylist} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pl-[10px] pt-[25px] text-left text-[10px] opacity-50">
              <div className="flex items-center justify-start">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActiveIndex(i)}
                    className={
                      'mx-[3px] mb-[0.5em] inline-block h-[1em] w-[1em] cursor-pointer shadow-[0_0_3px_rgba(51,51,51,0.4)] transition-colors duration-100 focus:outline-none focus:shadow-[0_0_0_2px_#fff] ' +
                      (i === activeIndex ? 'bg-white' : 'bg-white/40')
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
