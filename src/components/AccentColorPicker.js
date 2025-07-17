import React, { useState, useEffect } from 'react';
import { FaPalette, FaRandom } from 'react-icons/fa';

const PALETTES = [
  { name: 'Blue', color: '#0D8ABC', gradient: 'linear-gradient(90deg, #0D8ABC 0%, #61dafb 100%)', cosmic1: '#232946', cosmic2: '#0D8ABC', shadow: '#0D8ABC22' },
  { name: 'Purple', color: '#7C3AED', gradient: 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)', cosmic1: '#2D193C', cosmic2: '#7C3AED', shadow: '#7C3AED22' },
  { name: 'Green', color: '#10B981', gradient: 'linear-gradient(90deg, #10B981 0%, #6EE7B7 100%)', cosmic1: '#1B3C2D', cosmic2: '#10B981', shadow: '#10B98122' },
  { name: 'Orange', color: '#F59E42', gradient: 'linear-gradient(90deg, #F59E42 0%, #FDE68A 100%)', cosmic1: '#3C2B1B', cosmic2: '#F59E42', shadow: '#F59E4222' },
  { name: 'Pink', color: '#EC4899', gradient: 'linear-gradient(90deg, #EC4899 0%, #F9A8D4 100%)', cosmic1: '#3C1B2D', cosmic2: '#EC4899', shadow: '#EC489922' },
  { name: 'Red', color: '#EF4444', gradient: 'linear-gradient(90deg, #EF4444 0%, #FCA5A5 100%)', cosmic1: '#3C1B1B', cosmic2: '#EF4444', shadow: '#EF444422' },
];

function setAccentPalette({ color, gradient, cosmic1, cosmic2, shadow }) {
  document.documentElement.style.setProperty('--color-primary', color);
  document.documentElement.style.setProperty('--color-link', color);
  document.documentElement.style.setProperty('--color-header-bg', gradient);
  document.documentElement.style.setProperty('--color-cosmic1', cosmic1);
  document.documentElement.style.setProperty('--color-cosmic2', cosmic2);
  document.documentElement.style.setProperty('--color-cosmic-shadow', shadow);
}

function AccentColorPicker() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    const idx = localStorage.getItem('accentPaletteIdx');
    return idx ? parseInt(idx, 10) : 0;
  });

  useEffect(() => {
    setAccentPalette(PALETTES[selected]);
    localStorage.setItem('accentPaletteIdx', selected);
  }, [selected]);

  const randomize = () => {
    let idx;
    do {
      idx = Math.floor(Math.random() * PALETTES.length);
    } while (idx === selected);
    setSelected(idx);
    setOpen(false);
  };

  return (
    <div className="accent-picker-fab-wrap">
      <button className="accent-picker-fab" onClick={() => setOpen(o => !o)} aria-label="Pick accent color">
        <FaPalette />
      </button>
      {open && (
        <div className="accent-picker-popover">
          {PALETTES.map((p, idx) => (
            <button
              key={p.name}
              className={`accent-picker-swatch${selected === idx ? ' selected' : ''}`}
              style={{ background: p.gradient }}
              onClick={() => { setSelected(idx); setOpen(false); }}
              aria-label={p.name}
            />
          ))}
          <button className="accent-picker-random" onClick={randomize} aria-label="Randomize accent color">
            <FaRandom />
          </button>
        </div>
      )}
    </div>
  );
}

export default AccentColorPicker; 