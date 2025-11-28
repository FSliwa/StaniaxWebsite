import { Users, Shield, Wrench } from '@phosphor-icons/react'

export function WhyStaniaxContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-blue-600 mb-6 font-bold">DLACZEGO MY</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter text-gray-900">
            Partner w Metalizacji
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dlaczego warto wybrać nas jako partnera do metalizacji przemysłowej
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Kolumna 1: Wsparcie Techniczne */}
          <div className="text-center space-y-6 group">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
              WSPARCIE TECHNICZNE
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Towarzyszymy klientowi w wyborze odpowiedniego rozwiązania dla jego potrzeb, oferując również techniczny serwis posprzedażny.
            </p>
          </div>

          {/* Kolumna 2: Jakość Produktów */}
          <div className="text-center space-y-6 group">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
              JAKOŚĆ PRODUKTÓW
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Innowacyjne pomysły i szczególna uwaga na wpływ środowiskowy produkcji przemysłowej to misja STANIAX.
            </p>
          </div>

          {/* Kolumna 3: Personalizacja */}
          <div className="text-center space-y-6 group">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100">
                <Wrench className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
              PERSONALIZACJA
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Towarzyszymy klientowi podczas konfiguracji produktu, aby zidentyfikować najlepsze ustawienia wydajności.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
