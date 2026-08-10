'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Перевіряємо пароль (має збігатися з тим, що в middleware)
    if (password === '123') {
      document.cookie = `auth=${password}; path=/; max-age=31536000`
      router.push('/')
      router.refresh()
    } else {
      setError(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAF9] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Лайк Hub</h1>
        <p className="text-gray-500 mb-6">Введіть пароль для доступу до мережі</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введіть пароль..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 text-center text-lg"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">Неправильний пароль</p>}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-colors"
          >
            Увійти
          </button>
        </form>
      </div>
    </main>
  )
}
