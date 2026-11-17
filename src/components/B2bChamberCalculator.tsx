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
    pcsPerCycle: 900,
    label: {
      pl: 'Małe detale (20–65 mm)',
      en: 'Small components (20–65 mm)',
      de: 'Kleinteile (20–65 mm)',
    },
    examples: {
      pl: 'Nakrętki perfum, atomizery, przyciski, emblematy (~900 szt./wsad Ø 1200 mm)',
      en: 'Cosmetic caps, collars, buttons, emblems (~900 pcs / Ø 1200 mm cycle)',
      de: 'Kosmetikkappen, Tasten, Embleme (~900 Stk. / Ø 1200 mm Kammerzyklus)',
    },
  },
  {
    id: 'medium',
    pcsPerCycle: 140,
    label: {
      pl: 'Średnie detale (80–240 mm)',
      en: 'Medium parts (80–240 mm)',
      de: 'Mittelgroße Bauteile (80–240 mm)',
    },
    examples: {
      pl: 'Odbłyśniki, flakony 100 ml, ramki dekoracyjne (~140 szt./wsad Ø 1200 mm)',
      en: 'Reflector bowls, 100 ml flacons, trim bezels (~140 pcs / Ø 1200 mm cycle)',
      de: 'Reflektoren, 100-ml-Flakons, Zierblenden (~140 Stk. / Ø 1200 mm Zyklus)',
    },
  },
  {
    id: 'large',
    pcsPerCycle: 28,
    label: {
      pl: 'Duże korpusy i klosze (250–550 mm)',
      en: 'Large housings & optics (250–550 mm)',
      de: 'Großgehäuse & Leuchtenoptik (250–550 mm)',
    },
    examples: {
      pl: 'Oprawy przemysłowe LED, osłony maszyn, panele (~28 szt./wsad Ø 1200 mm)',
      en: 'Industrial LED reflectors, machine shrouds, panels (~28 pcs / Ø 1200 mm cycle)',
      de: 'Hallenstrahler-Optiken, Gehäuseabdeckungen (~28 Stk. / Ø 1200 mm Zyklus)',
    },
  },
]

const MATERIAL_SPECS: MaterialSpec[] = [
  {
    id: 'abs',
    code: 'ABS / PC+ABS',
    stack: {
      pl: 'Mycie jonizujące + podkład UV wyrównujący + Al 99,99% PVD + topcoat UV (ISO 2409 Gt 0)',
      en: 'Ionized wash + UV leveling basecoat + 99.99% Al PVD + UV topcoat (ISO 2409 Gt 0)',
      de: 'Ionisierte Reinigung + UV-Glättprimer + 99,99 % Al PVD + UV-Decklack (ISO 2409 Gt 0)',
    },
  },
  {
    id: 'pc',
    code: 'PC / PC-HT / PEI',
    stack: {
      pl: 'Odgazowanie termiczne + podkład barierowy wysokotemp. + Al 99,99% + pasywacja SiOx (>92% odbicia)',
      en: 'Moisture pre-bake + barrier primer + 99.99% Al + SiOx passivation (>92% reflectance)',
      de: 'Vortrocknung + Sperrgrundierung + 99,99 % Al + SiOx-Passivierung (>92 % Reflexion)',
    },
  },
  {
    id: 'pp',
    code: 'PP / PP+EPDM',
    stack: {
      pl: 'Aktywacja płomieniowa/plazmowa (≥44 mN/m) + promotor CPO + podkład UV + powłoka PVD',
      en: 'Flame/plasma activation (≥44 mN/m) + CPO adhesion promoter + UV base + PVD stack',
      de: 'Flamm-/Plasmaaktivierung (≥44 mN/m) + CPO-Haftvermittler + UV-Basis + PVD-Schicht',
    },
  },
  {
    id: 'pa',
    code: 'PA6 / PA66 GF',
    stack: {
      pl: 'Kondycjonowanie wilgoci + podkład wypełniający 2K EP/PU + metalizacja PVD + lakier 2K PU',
      en: 'Thermal degassing + high-build 2K primer + PVD metallization + 2K PU clearcoat',
      de: 'Temper-Entgasung + 2K-Füllprimer + PVD-Metallisierung + 2K-PUR-Schutzlack',
    },
  },
  {
    id: 'glass',
    code: 'Szkło / Ceramika',
    stack: {
      pl: 'Promotor organosilanowy Si–O–C + napylanie PVD chrom/złoto + lakier odporny na 96% etanol',
      en: 'Organosilane coupling primer + chrome/gold PVD + 96% ethanol-resistant topcoat',
      de: 'Organosilan-Haftbrücke + Chrom-/Gold-PVD + 96-%-ethanolfester Schutzlack',
    },
  },
  {
    id: 'sls3d',
    code: 'Druk 3D SLS / SLA',
    stack: {
      pl: 'Uszczelnianie porowatości PA12 / żywicy + podkład wygładzający + PVD aluminium 99,99%',
      en: 'PA12/resin pore sealing + high-build smoothing primer + 99.99% Al PVD finish',
      de: 'Porenversiegelung für PA12/Harz + Glättgrundierung + 99,99 % Al PVD-Spiegel',
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
    badge: 'Kalkulator inżynieryjny wsadu PVD Ø 1200 mm',
    title: 'Oszacuj wsad komory próżniowej, stos powłok PVD i czas realizacji serii B2B',
    subtitle:
      'Dobierz gabaryt detalu, tworzywo oraz wielkość partii, aby sprawdzić orientacyjną liczbę cykli planetarnych w komorach Ø 1200 mm oraz zalecaną technologię przygotowania podłoża.',
    sizeLabel: '1. Gabaryt detalu na satelicie komory',
    matLabel: '2. Materiał podłoża (polimer / szkło)',
    batchLabel: '3. Wielkość partii produkcyjnej (szt.)',
    cyclesLabel: 'Szacowana liczba wsadów komory Ø 1200 mm',
    leadTimeLabel: 'Orientacyjny czas realizacji w zakładzie Józefów',
    stackLabel: 'Rekomendowany stos technologiczny powłoki PVD:',
    cta: 'Przejdź do formularza wyceny tej serii',
  },
  en: {
    badge: 'Ø 1200 mm PVD Chamber Batch Calculator',
    title: 'Estimate Vacuum Chamber Cycles, Coating Stack & B2B Lead Time',
    subtitle:
      'Select component dimensions, substrate polymer, and batch volume to calculate planetary rack cycles in our Ø 1200 mm chambers and recommended primer chemistry.',
    sizeLabel: '1. Component envelope on planetary rack',
    matLabel: '2. Substrate material',
    batchLabel: '3. Production batch quantity (pcs)',
    cyclesLabel: 'Estimated Ø 1200 mm chamber cycles',
    leadTimeLabel: 'Estimated plant turnaround (Józefów)',
    stackLabel: 'Recommended PVD & primer engineering stack:',
    cta: 'Request B2B quotation for this batch',
  },
  de: {
    badge: 'PVD-Kammerrechner Ø 1200 mm für B2B-Serien',
    title: 'Kammerzyklen, Schichtaufbau und Durchlaufzeit für Ihre Serie berechnen',
    subtitle:
      'Wählen Sie Bauteilgröße, Werkstoff und Losgröße, um die Belegung unserer Ø-1200-mm-Planetenkammern sowie das passende Primersystem zu ermitteln.',
    sizeLabel: '1. Bauteilgröße auf dem Planetengestell',
    matLabel: '2. Substratwerkstoff',
    batchLabel: '3. Serienlosgröße (Stück)',
    cyclesLabel: 'Geschätzte Kammerzyklen (Ø 1200 mm)',
    leadTimeLabel: 'Voraussichtliche Durchlaufzeit ab Werk Józefów',
    stackLabel: 'Empfohlener PVD- & Primer-Schichtaufbau:',
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
    cycles <= 3
      ? lang === 'pl'
        ? '3–5 dni roboczych'
        : lang === 'de'
          ? '3–5 Werktage'
          : '3–5 business days'
      : cycles <= 12
        ? lang === 'pl'
          ? '5–8 dni roboczych'
          : lang === 'de'
            ? '5–8 Werktage'
            : '5–8 business days'
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
