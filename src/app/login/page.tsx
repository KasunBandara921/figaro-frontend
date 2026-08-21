'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiRequest } from '@/lib/api'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setRegistered(params.get('registered') === '1')
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })

      localStorage.setItem('token', data.token)
      localStorage.setItem('role', data.role)
      localStorage.setItem('fullName', data.fullName)
      localStorage.setItem('email', data.email)

      if (data.role === 'ADMIN') {
        router.push('/admin')
      } else if (data.role === 'STYLIST') {
        router.push('/stylist')
      } else {
        router.push('/customer')
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your details.')
    } finally {
      setLoading(false)
    }
  }

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
            <form className="w-full" onSubmit={handleLogin}>
              <input
                className="h-[70px] w-full border-0 border-b border-neutral-700 bg-transparent font-playfair text-[16px] text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                maxLength={256}
                placeholder="e-mail"
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {registered && (
                <p className="mt-4 font-playfair text-[15px] text-green-600">
                  Registration successful! Please log in.
                </p>
              )}

              {error && (
                <p className="mt-4 font-playfair text-[15px] text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-[30px] bg-transparent font-playfair text-[20px] text-neutral-800 disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login →'}
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