import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { resolveLanguageAlternates } from '@/data/services'
import type { Lang } from '@/lib/translations'

const languages: Array<{ code: Lang; label: string; flag: string }> = [
  { code: 'pl', label: 'Polski (PL)', flag: '🇵🇱' },
  { code: 'en', label: 'English (EN)', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch (DE)', flag: '🇩🇪' },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const location = useLocation()
  const alternates = resolveLanguageAlternates(location.pathname)

  const currentLang: Lang = location.pathname.startsWith('/en')
    ? 'en'
    : location.pathname.startsWith('/de')
      ? 'de'
      : 'pl'

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      {languages.map(({ code, label, flag }) => {
        const isActive = currentLang === code
        const targetPath = alternates[code]

        return (
          <Link
            key={code}
            to={targetPath}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border text-base sm:text-lg transition-all duration-200 select-none',
              isActive
                ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm scale-105'
                : 'border-slate-300/80 bg-white/90 text-slate-700 opacity-75 hover:opacity-100 hover:bg-slate-100 hover:border-slate-400'
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
