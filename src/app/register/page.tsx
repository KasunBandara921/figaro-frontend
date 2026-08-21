'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiRequest } from '@/lib/api'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ fullName, email, password }),
      })

      router.push('/login?registered=1')
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
            <form className="w-full" onSubmit={handleRegister}>
              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Full name"
                type="text"
                required
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="E-mail"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Password"
                type="password"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="Confirm password"
                type="password"
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && (
                <p className="mt-4 font-playfair text-[15px] text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-[30px] bg-transparent font-playfair text-[20px] text-neutral-800 disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create account →'}
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
