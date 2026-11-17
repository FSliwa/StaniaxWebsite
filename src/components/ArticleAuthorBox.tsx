import { Calendar, UserCheck } from '@phosphor-icons/react'
import { Lang } from '@/lib/translations'

interface ArticleAuthorBoxProps {
  lang: Lang
  datePublished: string
  dateModified: string
}

const AUTHOR_COPY: Record<
  Lang,
  {
    authorRole: string
    authorBio: string
    publishedLabel: string
    updatedLabel: string
  }
> = {
  pl: {
    authorRole: 'Główny Technolog Metalizacji Próżniowej PVD · STANIAX Sp. z o.o.',
    authorBio:
      'Ponad 25 lat praktyki w metalizacji próżniowej PVD i testach przyczepności ISO 2409.',
    publishedLabel: 'Opublikowano',
    updatedLabel: 'Aktualizacja',
  },
  en: {
    authorRole: 'Chief PVD Vacuum Metallization Technologist · STANIAX Sp. z o.o.',
    authorBio:
      '25+ years of expertise in PVD aluminum vapor deposition and ISO 2409 adhesion testing.',
    publishedLabel: 'Published',
    updatedLabel: 'Updated',
  },
  de: {
    authorRole: 'Leitender Technologe für PVD-Vakuummetallisierung · STANIAX Sp. z o.o.',
    authorBio:
      'Über 25 Jahre Praxiserfahrung in PVD-Aluminiumbedampfung und Haftprüfung ISO 2409.',
    publishedLabel: 'Veröffentlicht',
    updatedLabel: 'Aktualisiert',
  },
}

/** Visible E-E-A-T author and date attribution box matching Article JSON-LD metadata. */
export function ArticleAuthorBox({ lang, datePublished, dateModified }: ArticleAuthorBoxProps) {
  const copy = AUTHOR_COPY[lang]

  return (
    <div className="mb-8 rounded-2xl border border-slate-200/90 bg-white/80 p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
            <UserCheck weight="duotone" className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-bold text-foreground">Dariusz Staniak</p>
            <p className="text-xs font-semibold text-blue-700">{copy.authorRole}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{copy.authorBio}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-2 sm:pt-0 sm:pl-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span>
              {copy.publishedLabel}: <time dateTime={datePublished}>{datePublished}</time>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
            <span>
              {copy.updatedLabel}: <time dateTime={dateModified}>{dateModified}</time>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
