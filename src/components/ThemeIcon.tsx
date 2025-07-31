// src/components/ThemeIcon.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const icons: Record<string, string> = {
  theme1: '🌞',     // Light mode
  theme2: '🌙',     // Dark mode
  theme3: '🌈',     // Colorful theme
};

export default function ThemeIcon() {
  const { recentlyChangedTheme } = useTheme();

  if (!recentlyChangedTheme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="text-7xl animate-fade-in-out drop-shadow-lg">
        {icons[recentlyChangedTheme]}
      </div>
    </div>
  );
}
