type DayTileProps = {
  gridArea: string
  className?: string
  background?: string
  dayLabel: string
  dayLabelVariant: 'light' | 'dark'
  hoursVariant: 'split' | 'full-dark' | 'full-light' | 'closed'
  leftHours?: string
  rightHours?: string
  fullHours?: string
}

function DayTile({
  gridArea,
  className,
  background,
  dayLabel,
  dayLabelVariant,
  hoursVariant,
  leftHours,
  rightHours,
  fullHours,
}: DayTileProps) {
  return (
    <div
      className={
        'group relative flex cursor-pointer flex-col justify-between overflow-hidden ' +
        (className ?? '')
      }
      style={{
        gridArea,
        backgroundImage: background,
        backgroundPosition: '0 0, 50% 50%',
        backgroundSize: 'auto, cover',
      }}
    >
      {/* Day label row */}
      <div className="flex w-full min-h-[70px] items-center justify-end pr-[30px]">
        <div
          className={
            'font-playfair text-[40px] leading-[50px] ' +
            (dayLabelVariant === 'light' ? 'text-white' : 'text-neutral-800')
          }
        >
          {dayLabel}
        </div>
      </div>

      {/* Hours (hidden until hover) */}
      {hoursVariant === 'split' ? (
        <div className="flex w-full min-h-[80px] opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="flex w-1/2 min-h-[80px] items-center justify-center bg-stone-200/70">
            <div className="font-playfair text-[20px] leading-[30px] text-neutral-800">{leftHours}</div>
          </div>
          <div className="flex w-1/2 min-h-[80px] items-center justify-center bg-black/50">
            <div className="font-playfair text-[20px] leading-[30px] text-white">{rightHours}</div>
          </div>
        </div>
      ) : hoursVariant === 'full-dark' ? (
        <div className="flex w-full min-h-[80px] items-center justify-center bg-black/50 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="font-playfair text-[20px] leading-[30px] text-white">{fullHours}</div>
        </div>
      ) : hoursVariant === 'full-light' ? (
        <div className="flex w-full min-h-[80px] items-center justify-center bg-white/30 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="font-playfair text-[20px] leading-[30px] text-neutral-800">{fullHours}</div>
        </div>
      ) : (
        <div className="flex w-full min-h-[80px] items-center justify-center bg-neutral-50 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="font-playfair text-[20px] leading-[30px] text-neutral-800">CLOSED</div>
        </div>
      )}
    </div>
  )
}

export default function OpeningHours() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-start py-[150px] px-6">
      <div className="w-[70%] max-w-[1400px] flex flex-col items-center">
        <h2 className="font-playfair text-[45px] leading-[65px] font-normal text-neutral-800">Opening Hours</h2>
      </div>

      <div className="mt-[50px] w-[85%] max-w-[1200px] grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-4">
        {/* Monday: row 1 col 1 */}
        <DayTile
          gridArea="1 / 1 / 2 / 2"
          className="min-h-[400px]"
          dayLabel="Mon"
          dayLabelVariant="dark"
          hoursVariant="split"
          leftHours="9:00am to 12:30am"
          rightHours="1:00pm to 6:30pm"
          background={
            "linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url('/images/5bcdabfb1fb2098b22c6a0e1_17.jpg')"
          }
        />

        {/* Thursday: col 2 spanning rows 1-3 */}
        <DayTile
          gridArea="1 / 2 / 4 / 3"
          className="min-h-[900px]"
          dayLabel="Thu"
          dayLabelVariant="dark"
          hoursVariant="full-light"
          fullHours="2:00pm to 7:30pm"
          background={
            "linear-gradient(rgba(255,255,255,0.52), rgba(255,255,255,0.52)), url('/images/5bcdabf639ce881e58a2678d_3.jpg')"
          }
        />

        {/* Tuesday: row 2 col 1 */}
        <DayTile
          gridArea="2 / 1 / 3 / 2"
          className="min-h-[180px] border border-neutral-300"
          dayLabel="Tue"
          dayLabelVariant="light"
          hoursVariant="full-dark"
          fullHours="2:00pm to 7:30pm"
          background={
            "linear-gradient(rgba(1,1,1,0.51), rgba(1,1,1,0.51)), url('/images/5bcdabfa79f044e032c9bea1_11.jpg')"
          }
        />

        {/* Wednesday: row 3 col 1 */}
        <DayTile
          gridArea="3 / 1 / 4 / 2"
          className="min-h-[180px] bg-white border border-neutral-100"
          dayLabel="Wed"
          dayLabelVariant="dark"
          hoursVariant="closed"
        />

        {/* Friday: row 4 col 1 */}
        <DayTile
          gridArea="4 / 1 / 5 / 2"
          className="min-h-[500px]"
          dayLabel="Fri"
          dayLabelVariant="light"
          hoursVariant="split"
          leftHours="9:00am to 12:30am"
          rightHours="1:00pm to 6:30pm"
          background={
            "linear-gradient(rgba(1,1,1,0.38), rgba(1,1,1,0.38)), url('/images/5bcdabf679f044618cc9be9e_8.jpg')"
          }
        />

        {/* Saturday: row 4 col 2 */}
        <DayTile
          gridArea="4 / 2 / 5 / 3"
          className="min-h-[500px]"
          dayLabel="Sat"
          dayLabelVariant="light"
          hoursVariant="full-dark"
          fullHours="2:00pm to 7:30pm"
          background={
            "linear-gradient(rgba(38,38,38,0.53), rgba(38,38,38,0.53)), url('/images/5bcdabf61fb209ca6ec6a0dd_1.jpg')"
          }
        />
      </div>
    </section>
  )
}
