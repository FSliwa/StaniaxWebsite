import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱', path: '/' },
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/en' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/de' }
]

export function LanguageSwitcher() {
  const location = useLocation()

  return (
    <div className="hidden md:flex items-center gap-2 mr-2">
      {languages.map(({ code, flag, path }) => {
        const isActive =
          (code === 'pl' && location.pathname === '/') ||
          (code !== 'pl' && location.pathname.startsWith(`/${code}`))

        return (
          <Link
            key={code}
            to={path}
            aria-label={`Przejdź do wersji językowej: ${code.toUpperCase()}`}
            className={cn(
              'flex items-center justify-center w-9 h-9 rounded-full border text-lg transition-all duration-200',
              isActive
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-slate-300 bg-white/80 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
            )}
          >
            <span role="img" aria-hidden="true">
              {flag}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

