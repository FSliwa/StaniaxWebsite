import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, CheckCircle } from '@phosphor-icons/react'
import type { Lang } from '@/lib/translations'

type SizeId = 'small' | 'medium' | 'large'
type MaterialKey = 'abs' | 'pc' | 'pp' | 'pa' | 'glass' | 'sls3d'

interface SizePreset {
  id: SizeId
  pcsPerCycle: number
  label: Record<Lang, string>
  examples: Record<Lang, string>
}

interface MaterialSpec {
  id: MaterialKey
  code: string
  stack: Record<Lang, string>
}

const SIZE_PRESETS: SizePreset[] = [
  {
    id: 'small',
    pcsPerCycle: 600,
    label: {
      pl: 'Małe detale (20-65 mm)',
      en: 'Small components (20-65 mm)',
      de: 'Kleinteile (20-65 mm)',
    },
    examples: {
      pl: 'Nakrętki perfum, atomizery, przyciski, emblematy (wysoka gęstość na bębnie PVD)',
      en: 'Cosmetic caps, collars, buttons, emblems (high-density rotary PVD rack)',
      de: 'Kosmetikkappen, Tasten, Embleme (hohe Packungsdichte auf Drehgestell)',
    },
  },
  {
    id: 'medium',
    pcsPerCycle: 120,
    label: {
      pl: 'Średnie detale (80-240 mm)',
      en: 'Medium parts (80-240 mm)',
      de: 'Mittelgroße Bauteile (80-240 mm)',
    },
    examples: {
      pl: 'Odbłyśniki reflektorów, flakony 100 ml, ramki dekoracyjne',
      en: 'Reflector bowls, 100 ml flacons, decorative trim bezels',
      de: 'Scheinwerferreflektoren, 100-ml-Flakons, Zierblenden',
    },
  },
  {
    id: 'large',
    pcsPerCycle: 24,
    label: {
      pl: 'Duże korpusy i klosze (250-550 mm)',
      en: 'Large housings & optics (250-550 mm)',
      de: 'Großgehäuse & Leuchtenoptik (250-550 mm)',
    },
    examples: {
      pl: 'Oprawy oświetleniowe, osłony przemysłowe, panele dekoracyjne',
      en: 'Lighting reflectors, industrial shrouds, decorative panels',
      de: 'Leuchtenoptiken, Gehäuseabdeckungen, Dekorpanele',
    },
  },
]

const MATERIAL_SPECS: MaterialSpec[] = [
  {
    id: 'abs',
    code: 'ABS / PC+ABS',
    stack: {
      pl: 'Odtłuszczanie antystatyczne + lakier podkładowy UV + aluminium PVD + lakier ochronny UV (ISO 2409)',
      en: 'Antistatic prep + UV leveling basecoat + aluminum PVD + UV protective topcoat (ISO 2409)',
      de: 'Antistatische Reinigung + UV-Grundlack + Aluminium-PVD + UV-Schutzlack (ISO 2409)',
    },
  },
  {
    id: 'pc',
    code: 'PC / PC-HT / BMC',
    stack: {
      pl: 'Przygotowanie powierzchni + podkład wysokotemperaturowy + aluminium PVD + powłoka ochronna UV',
      en: 'Surface conditioning + high-temp barrier primer + aluminum PVD + UV protective layer',
      de: 'Oberflächenvorbereitung + Hitzeschutzprimer + Aluminium-PVD + UV-Schutzschicht',
    },
  },
  {
    id: 'pp',
    code: 'PP / PP+EPDM',
    stack: {
      pl: 'Przygotowanie fizykochemiczne powierzchni + promotor przyczepności do poliolefin + podkład UV + powłoka PVD',
      en: 'Physicochemical surface prep + polyolefin adhesion promoter + UV basecoat + PVD finish',
      de: 'Oberflächenvorbereitung + Polyolefin-Haftvermittler + UV-Basis + PVD-Schicht',
    },
  },
  {
    id: 'pa',
    code: 'PA6 / PA66 GF',
    stack: {
      pl: 'Wygrzewanie kondycjonujące + podkład wypełniający 2K + metalizacja PVD + lakier nawierzchniowy 2K',
      en: 'Thermal conditioning + high-build 2K primer + PVD metallization + 2K protective clearcoat',
      de: 'Vortrocknung + 2K-Füllprimer + PVD-Metallisierung + 2K-Decklack',
    },
  },
  {
    id: 'glass',
    code: 'Szkło / Ceramika',
    stack: {
      pl: 'Promotor adhezji do szkła + napylanie PVD chrom/złoto + lakier odporny na alkohol i ścieranie',
      en: 'Glass adhesion promoter + chrome/gold PVD + alcohol- and abrasion-resistant topcoat',
      de: 'Glas-Haftvermittler + Chrom-/Gold-PVD + alkohol- und abriebfester Decklack',
    },
  },
  {
    id: 'sls3d',
    code: 'Prototypy i Druk 3D',
    stack: {
      pl: 'Uszczelnianie porowatości podkładem wypełniającym + warstwa wygładzająca + PVD aluminium',
      en: 'Pore-sealing filler primer + smoothing basecoat + vacuum aluminum PVD',
      de: 'Porenversiegelung per Füllprimer + Glättschicht + Vakuum-Aluminium-PVD',
    },
  },
]

const COPY: Record<
  Lang,
  {
    badge: string
    title: string
    subtitle: string
    sizeLabel: string
    matLabel: string
    batchLabel: string
    cyclesLabel: string
    leadTimeLabel: string
    stackLabel: string
    cta: string
  }
> = {
  pl: {
    badge: 'Kalkulator orientacyjny partii produkcyjnej PVD',
    title: 'Dobierz układ powłokowy PVD i sprawdź orientacyjny czas realizacji serii B2B',
    subtitle:
      'Wybierz gabaryt detalu, materiał podłoża oraz wielkość partii - dla prototypów oferujemy tryb ekspresowy 2-3 dni robocze, a dla projektów produkcyjnych standardowo 5-10 dni roboczych.',
    sizeLabel: '1. Gabaryt detalu na oprzyrządowaniu komory',
    matLabel: '2. Materiał podłoża (tworzywo / szkło)',
    batchLabel: '3. Wielkość partii produkcyjnej (szt.)',
    cyclesLabel: 'Szacowana liczba wsadów produkcyjnych',
    leadTimeLabel: 'Standardowy czas realizacji w zakładzie Józefów',
    stackLabel: 'Rekomendowany układ technologiczny powłoki:',
    cta: 'Przejdź do formularza wyceny tej serii',
  },
  en: {
    badge: 'Industrial PVD Batch & Coating Estimator',
    title: 'Select Recommended Coating Stack & Estimate B2B Production Lead Time',
    subtitle:
      'Choose component size, substrate material, and batch quantity - express prototype mode takes 2-3 business days, while serial production runs take 5-10 business days.',
    sizeLabel: '1. Component size category',
    matLabel: '2. Substrate material',
    batchLabel: '3. Production batch quantity (pcs)',
    cyclesLabel: 'Estimated rotary chamber cycles',
    leadTimeLabel: 'Standard plant turnaround (Józefów)',
    stackLabel: 'Recommended PVD & primer stack:',
    cta: 'Request B2B quotation for this batch',
  },
  de: {
    badge: 'PVD-Serien- & Schichtaufbau-Rechner',
    title: 'Schichtaufbau und voraussichtliche Durchlaufzeit für Ihre Serie prüfen',
    subtitle:
      'Wählen Sie Bauteilgröße, Werkstoff und Losgröße - für Prototypen bieten wir einen Expressmodus von 2-3 Werktagen, Serienprojekte dauern regulär 5-10 Werktage.',
    sizeLabel: '1. Bauteilgröße auf dem Drehgestell',
    matLabel: '2. Substratwerkstoff',
    batchLabel: '3. Serienlosgröße (Stück)',
    cyclesLabel: 'Geschätzte Produktionszyklen',
    leadTimeLabel: 'Standard-Durchlaufzeit ab Werk Józefów',
    stackLabel: 'Empfohlener PVD- & Lackschichtaufbau:',
    cta: 'Unverbindliches Serienangebot anfordern',
  },
}

export function B2bChamberCalculator({ lang }: { lang: Lang }) {
  const [sizeId, setSizeId] = useState<SizeId>('small')
  const [matId, setMatId] = useState<MaterialKey>('abs')
  const [batchQty, setBatchQty] = useState<number>(2000)

  const c = COPY[lang]
  const sizeSpec = SIZE_PRESETS.find((s) => s.id === sizeId) || SIZE_PRESETS[0]
  const matSpec = MATERIAL_SPECS.find((m) => m.id === matId) || MATERIAL_SPECS[0]
  const cycles = Math.max(1, Math.ceil(batchQty / sizeSpec.pcsPerCycle))

  const leadTime =
    cycles <= 1
      ? lang === 'pl'
        ? '2-3 dni robocze (tryb ekspresowy / prototypy)'
        : lang === 'de'
          ? '2-3 Werktage (Express / Prototypen)'
          : '2-3 business days (express / prototypes)'
      : cycles <= 12
        ? lang === 'pl'
          ? '5-10 dni roboczych (produkcja seryjna)'
          : lang === 'de'
            ? '5-10 Werktage (Serienproduktion)'
            : '5-10 business days (serial production)'
        : lang === 'pl'
          ? 'Harmonogram tygodniowy (dostawy transzowe B2B)'
          : lang === 'de'
            ? 'Wöchentlicher Serienabruf (Teillieferungen)'
            : 'Scheduled weekly OEM split-deliveries'

  return (
    <section
      id="kalkulator-pvd"
      className="py-16 lg:py-20 bg-white border-t border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <Calculator className="h-4 w-4" weight="bold" aria-hidden="true" />
              <span>{c.badge}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
              {c.title}
            </h2>
            <p className="text-slate-700 leading-relaxed">{c.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2.5">
                <p className="text-sm font-bold text-slate-900">{c.sizeLabel}</p>
                <div className="grid grid-cols-1 gap-2.5">
                  {SIZE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSizeId(preset.id)}
                      className={`text-left rounded-2xl border p-4 transition-colors cursor-pointer ${
                        preset.id === sizeId
                          ? 'border-blue-600 bg-blue-50/80'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="block font-bold text-slate-900 text-sm sm:text-base">
                        {preset.label[lang]}
                      </span>
                      <span className="block text-xs text-slate-600 mt-0.5">
                        {preset.examples[lang]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-sm font-bold text-slate-900">{c.matLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {MATERIAL_SPECS.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMatId(mat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-colors cursor-pointer ${
                        mat.id === matId
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {mat.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-sm font-bold text-slate-900">{c.batchLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {[200, 1000, 2000, 10000, 50000].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setBatchQty(qty)}
                      className={`px-4 py-2 rounded-xl text-sm font-mono font-bold border transition-colors cursor-pointer ${
                        batchQty === qty
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {qty.toLocaleString('pl-PL')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-950 text-white p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-blue-300">
                    {c.cyclesLabel}
                  </span>
                  <span className="block text-3xl sm:text-4xl font-black font-mono text-white mt-1">
                    {cycles} {cycles === 1 ? 'cykl' : lang === 'pl' ? 'cykle/wsady' : 'cycles'}
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-blue-300">
                    {c.leadTimeLabel}
                  </span>
                  <span className="block text-lg font-bold text-slate-100 mt-1">
                    {leadTime}
                  </span>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4 space-y-1.5">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300">
                    <CheckCircle className="h-4 w-4" weight="fill" aria-hidden="true" />
                    <span>{c.stackLabel}</span>
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {matSpec.stack[lang]}
                  </p>
                </div>
              </div>

              <a
                href="#wycena"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).trackEvent === 'function') {
                    ;(window as any).trackEvent('calculate_b2b_batch', {
                      part_size: sizeId,
                      substrate: matId,
                      batch_quantity: batchQty,
                      estimated_cycles: cycles,
                      language: lang,
                    })
                  }
                }}
                className="block w-full text-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 text-sm font-bold transition-colors"
              >
                {c.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
