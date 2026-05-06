import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { palettes, type Palette } from '../lib/palettes';

interface PaletteSelectorProps {
  selectedPalette: Palette;
  onPaletteChange: (palette: Palette) => void;
}

export function PaletteSelector({ selectedPalette, onPaletteChange }: PaletteSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-600">Color Palette:</p>
      </div>

      {/* Selected Palette Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between hover:border-slate-300 transition-colors"
      >
        <div className="flex items-center gap-3">
          {/* Color Swatches */}
          <div className="flex gap-1">
            <div className="w-5 h-5 rounded border border-slate-200" style={{ backgroundColor: selectedPalette.colors.primary }} />
            <div className="w-5 h-5 rounded border border-slate-200" style={{ backgroundColor: selectedPalette.colors.secondary }} />
            <div className="w-5 h-5 rounded border border-slate-200" style={{ backgroundColor: selectedPalette.colors.accent }} />
          </div>
          <span className="text-sm text-slate-900">{selectedPalette.name}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {palettes.map((palette) => (
            <button
              key={palette.id}
              onClick={() => {
                onPaletteChange(palette);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors ${
                selectedPalette.id === palette.id ? 'bg-slate-50' : ''
              }`}
            >
              {/* Color Swatches */}
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded border border-slate-200" style={{ backgroundColor: palette.colors.primary }} />
                <div className="w-6 h-6 rounded border border-slate-200" style={{ backgroundColor: palette.colors.secondary }} />
                <div className="w-6 h-6 rounded border border-slate-200" style={{ backgroundColor: palette.colors.accent }} />
              </div>
              <span className="text-sm text-slate-900 flex-1 text-left">{palette.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
