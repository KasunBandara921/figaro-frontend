import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="bg-white">
      <section className="flex min-h-screen flex-col items-center justify-start px-6 py-[150px]">
        <div className="w-[90%] max-w-[1400px]">
          <h1 className="mt-[10px] font-playfair text-[45px] font-normal leading-[65px] text-neutral-800">
            Login
          </h1>
          <p className="font-playfair text-[18px] leading-[30px] text-neutral-800">
            Enter your details to access your account.
          </p>

          <div className="mt-[100px] w-full max-w-[700px]">
            <form className="w-full">
              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="e-mail"
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
                autoComplete="current-password"
              />

              <button
                type="button"
                className="mt-[30px] bg-transparent font-playfair text-[20px] text-neutral-800"
              >
                Login →
              </button>

              <p className="mt-8 font-playfair text-[16px] text-neutral-700">
                Not registered yet?{' '}
                <Link href="/register" className="underline underline-offset-4 hover:text-neutral-950">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
