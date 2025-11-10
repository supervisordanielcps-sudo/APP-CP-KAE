import { Tier } from './types';

export const TIERS: Tier[] = [
  { name: 'Bronze', discount: 0.20, color: 'border-amber-700', textColor: 'text-amber-500' },
  { name: 'Prata', discount: 0.25, color: 'border-slate-500', textColor: 'text-slate-400' },
  { name: 'Ouro', discount: 0.28, color: 'border-yellow-500', textColor: 'text-yellow-400' },
  { name: 'Platina', discount: 0.30, color: 'border-slate-300', textColor: 'text-slate-200' },
  { name: 'Rubi', discount: 0.32, color: 'border-red-600', textColor: 'text-red-500' },
  { name: 'Esmeralda', discount: 0.34, color: 'border-emerald-500', textColor: 'text-emerald-400' },
  { name: 'Diamante', discount: 0.35, color: 'border-sky-300', textColor: 'text-sky-200' },
];