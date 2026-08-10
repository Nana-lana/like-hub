import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Тут ви можете вказати свій пароль
  const ADMIN_PASSWORD = "123" // Змініть на свій пароль
  
  const cookie = request.cookies.get('auth')
  const url = request.url

  // Якщо користувач уже ввів правильний пароль, пускаємо далі
  if (cookie?.value === ADMIN_PASSWORD) {
    return NextResponse.next()
  }

  // Якщо це запит на сторінку введення пароля, дозволяємо
  if (url.includes('/login')) {
    return NextResponse.next()
  }

  // Перенаправляємо на сторінку входу
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
