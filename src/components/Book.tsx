 'use client'

type Review = {
  imageUrl: string
  name: string
  text: string
}

export default function Book() {
  const reviews: Review[] = [
    {
      imageUrl: '/images/5bcef4f7969f00bc1503d84d_8a.png',
      name: 'Andy Rews',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: '/images/5bcef4f7969f00104d03d84e_9.png',
      name: 'Jeff Stevenson',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: '/images/5bcef4f7969f00579003d84f_3%20Thorbj%C3%B8rn%20Mesterfem.png',
      name: 'Ron Williams',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <section
      id="book"
      className="flex min-h-screen flex-col items-center justify-start bg-white py-[150px]"
    >
      <div className="flex w-[90%] max-w-[1400px] flex-col items-start">
        <h2 className="mt-[10px] font-playfair text-[45px] font-normal leading-[65px] text-neutral-800">
          Book an appointment
        </h2>
        <p className="font-playfair text-[18px] leading-[30px] text-neutral-800">
          Give us a call today and book an appointment in one of our salons.
        </p>

        <div className="mt-[100px] flex w-full flex-col justify-between lg:flex-row">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Name"
                type="text"
                required
              />
              <input
                className="mt-0 h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="e-mail"
                type="text"
                required
              />
              <textarea
                className="mt-[30px] min-h-[90px] w-full resize-none border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={5000}
                placeholder="Message"
              />
              <button
                type="submit"
                className="mt-[30px] bg-transparent font-playfair text-[20px] text-neutral-800"
              >
                Submit →
              </button>   
            </form>    
          </div>

          {/* Contact info */}
          <div className="mt-[30px] flex w-full items-center justify-center p-0 lg:mt-0 lg:w-1/2 lg:p-[40px]">
            <ul className="w-full list-none p-0 lg:ml-[70px]">
              <li className="mb-[40px] w-full">
                <div className="flex items-center">
                  <img
                    src="/images/5bcf05bca84749fc4f5cbd27_sign-post.svg"
                    width={30}
                    height={30}
                    alt="Address"
                    className="mr-[15px]"
                  />
                  <div className="font-playfair text-[18px] leading-[25px] text-neutral-800">
                    244 Madison Avenue - New York City NY, USA
                  </div>
                </div>
              </li>
              <li className="mb-[40px]">
                <div className="flex items-center">
                  <img
                    src="/images/5bcf05f7576ef227e4779c9c_telephone.svg"
                    width={30}
                    height={30}
                    alt="Telephone"
                    className="mr-[15px]"
                  />
                  <div className="font-playfair text-[18px] leading-[25px] text-neutral-800">+545 67 7378 383</div>
                </div>
              </li>
              <li className="mb-[40px]">
                <div className="flex items-center">
                  <img
                    src="/images/5bcf064c3fd498470b9eb196_email.svg"
                    width={30}
                    height={30}
                    alt="Email"
                    className="mr-[15px]"
                  />
                  <div className="font-playfair text-[18px] leading-[25px] text-neutral-800">info@figaro.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-[100px] grid w-[90%] max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex min-h-[350px] flex-col items-start border border-neutral-200 p-[40px]"
          >
            <img src={review.imageUrl} width={109} height={109} alt={review.name} />
            <p className="mt-0 font-playfair text-[18px] leading-[30px] text-neutral-800">{review.text}</p>
            <img
              src="/images/5bcef4f7969f0037e603d851_5-star-p-500.png"
              width={75}
              height={15}
              alt="5 star rating"
              className="mt-0"
            />
            <div className="mt-[15px] font-great-vibes text-[18px] text-neutral-800">{review.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
