import React, { useState } from 'react';
import { TIERS } from './constants';
import TierCard from './components/TierCard';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [baseValue, setBaseValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setBaseValue(parseFloat(inputValue) || 0);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-6 lg:p-8">
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#a1883b1a_1px,transparent_1px),linear-gradient(to_bottom,#a1883b1a_1px,transparent_1px)] bg-[size:14px_24px]"
      >
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber-600 opacity-20 blur-[120px]"></div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center items-center my-8 md:my-12">
          <div className="border-2 border-amber-400 text-amber-400 font-black text-3xl px-6 py-2 tracking-[0.3em] bg-black/30 backdrop-blur-sm">
              CP KAE
          </div>
        </div>

        <header className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-[0.5em] text-amber-400 uppercase mb-3">
            Eudora
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">
              Calculadora de Faixas
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Digite o valor do produto e pressione Enter para ver o preço com desconto em cada nível.
          </p>
        </header>

        <main>
          <div className="max-w-md mx-auto mb-10">
            <label htmlFor="price-input" className="sr-only">
              Valor do Produto
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-gray-600 text-lg">R$</span>
              </div>
              <input
                type="number"
                id="price-input"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onWheel={(e) => (e.target as HTMLInputElement).blur()}
                placeholder="0,00 e pressione Enter"
                className="w-full pl-12 pr-4 py-4 text-2xl font-mono bg-gray-900 border-2 border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                min="0"
                step="0.01"
              />
            </div>
          </div>
          
          {baseValue > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {TIERS.map((tier) => (
                <TierCard key={tier.name} tier={tier} baseValue={baseValue} />
              ))}
            </div>
          )}

          {baseValue <= 0 && (
            <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4v-1M12 18V9" />
                </svg>
                <h3 className="mt-2 text-xl font-medium text-gray-400">Aguardando valor</h3>
                <p className="mt-1 text-base text-gray-600">Os cálculos aparecerão aqui.</p>
            </div>
          )}
        </main>
        
        <footer className="text-center py-6 mt-12 border-t border-gray-900">
            <p className="text-gray-600 text-sm">Desenvolvido por Daniel Carvalho</p>
        </footer>
      </div>
    </div>
  );
};

export default App;