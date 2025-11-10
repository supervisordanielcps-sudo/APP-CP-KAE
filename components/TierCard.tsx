import React from 'react';
import { Tier } from '../types';

interface TierCardProps {
  tier: Tier;
  baseValue: number;
}

const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const TierCard: React.FC<TierCardProps> = ({ tier, baseValue }) => {
  const discountedValue = baseValue * (1 - tier.discount);
  const discountAmount = baseValue * tier.discount;

  return (
    <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border-t-4 ${tier.color} p-6 flex flex-col transition-all duration-300 hover:shadow-yellow-500/10 hover:shadow-2xl hover:-translate-y-1`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-2xl font-bold ${tier.textColor}`}>{tier.name}</h3>
        <span className="bg-gray-800 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full">
          {tier.discount * 100}% OFF
        </span>
      </div>
      <div className="flex-grow space-y-4 text-gray-400">
        <div className="flex justify-between items-baseline">
          <span className="text-sm">Valor Original:</span>
          <span className="font-mono text-gray-300">{formatCurrency(baseValue)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-sm">Desconto Aplicado:</span>
          <span className={`font-mono ${tier.textColor}`}>{formatCurrency(discountAmount)}</span>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500 mb-1">Valor Final</p>
        <p className="text-4xl font-extrabold text-white tracking-tight">
          {formatCurrency(discountedValue)}
        </p>
      </div>
    </div>
  );
};

export default TierCard;