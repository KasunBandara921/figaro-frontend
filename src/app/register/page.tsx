import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main className="bg-white">
      <section className="flex min-h-screen flex-col items-center justify-start px-6 py-[150px]">
        <div className="w-[90%] max-w-[1400px]">
          <h1 className="mt-[10px] font-playfair text-[45px] font-normal leading-[65px] text-neutral-800">
            Register
          </h1>
          <p className="font-playfair text-[18px] leading-[30px] text-neutral-800">
            Create your account to book appointments and manage your visits.
          </p>

          <div className="mt-[100px] w-full max-w-[700px]">
            <form className="w-full">
              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Full name"
                type="text"
                required
                autoComplete="name"
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="E-mail"
                type="email"
                required
                autoComplete="email"
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Password"
                type="password"
                required
                autoComplete="new-password"
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Confirm password"
                type="password"
                required
                autoComplete="new-password"
              />

              <button
                type="button"
                className="mt-[30px] bg-transparent font-playfair text-[20px] text-neutral-800"
              >
                Create account →
              </button>
            </form>

            <p className="mt-8 font-playfair text-[16px] text-neutral-700">
              Already registered?{' '}
              <Link href="/login" className="underline underline-offset-4 hover:text-neutral-950">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
