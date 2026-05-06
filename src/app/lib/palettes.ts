export interface Palette {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    accentLight: string;
    accentDark: string;
    background: string;
    backgroundAlt: string;
    border: string;
  };
}

export const palettes: Palette[] = [
  {
    id: 'muted',
    name: 'Muted Earth',
    colors: {
      primary: '#6B9FB5',
      primaryLight: '#EEF5F8',
      primaryDark: '#5A8CA3',
      secondary: '#8FA896',
      secondaryLight: '#F2F6F4',
      secondaryDark: '#7A9382',
      accent: '#D17B63',
      accentLight: '#FCF3F0',
      accentDark: '#B86A54',
      background: '#FAF7F2',
      backgroundAlt: '#F2EDE3',
      border: '#D4E2D9',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean Blues',
    colors: {
      primary: '#2f4b7c',
      primaryLight: '#e8ecf4',
      primaryDark: '#003f5c',
      secondary: '#665191',
      secondaryLight: '#f0edf5',
      secondaryDark: '#a05195',
      accent: '#d45087',
      accentLight: '#fce9f1',
      accentDark: '#f95d6a',
      background: '#fafbfc',
      backgroundAlt: '#f4f5f7',
      border: '#e1e4e8',
    },
  },
  {
    id: 'warm',
    name: 'Warm Sunset',
    colors: {
      primary: '#ff6b35',
      primaryLight: '#fff3ed',
      primaryDark: '#f7931e',
      secondary: '#fdc82f',
      secondaryLight: '#fffbeb',
      secondaryDark: '#f4e04d',
      accent: '#8ac926',
      accentLight: '#f3fbe8',
      accentDark: '#06a77d',
      background: '#fffcf7',
      backgroundAlt: '#fef8f0',
      border: '#f0e6d6',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    colors: {
      primary: '#2d6a4f',
      primaryLight: '#e8f5f0',
      primaryDark: '#1b4332',
      secondary: '#52b788',
      secondaryLight: '#ecf9f3',
      secondaryDark: '#40916c',
      accent: '#74c69d',
      accentLight: '#f0faf5',
      accentDark: '#95d5b2',
      background: '#f8fdf9',
      backgroundAlt: '#f0f8f3',
      border: '#d4e8dc',
    },
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    colors: {
      primary: '#5a189a',
      primaryLight: '#f1e8fa',
      primaryDark: '#3c096c',
      secondary: '#7209b7',
      secondaryLight: '#f4ebf9',
      secondaryDark: '#9d4edd',
      accent: '#c77dff',
      accentLight: '#f9f3ff',
      accentDark: '#e0aaff',
      background: '#fdfcfe',
      backgroundAlt: '#f9f7fb',
      border: '#e8dff5',
    },
  },
  {
    id: 'slate',
    name: 'Modern Slate',
    colors: {
      primary: '#415a77',
      primaryLight: '#eef1f5',
      primaryDark: '#1b263b',
      secondary: '#778da9',
      secondaryLight: '#f2f5f8',
      secondaryDark: '#0d1b2a',
      accent: '#b0c4de',
      accentLight: '#f5f8fb',
      accentDark: '#e0e1dd',
      background: '#fafbfc',
      backgroundAlt: '#f4f6f8',
      border: '#dde3e9',
    },
  },
  {
    id: 'vibrant',
    name: 'Vibrant Pop',
    colors: {
      primary: '#118ab2',
      primaryLight: '#e8f6fa',
      primaryDark: '#073b4c',
      secondary: '#06d6a0',
      secondaryLight: '#e6faf5',
      secondaryDark: '#fcbf49',
      accent: '#f77f00',
      accentLight: '#fff5eb',
      accentDark: '#e63946',
      background: '#fefefe',
      backgroundAlt: '#f8f9fa',
      border: '#e0f0f5',
    },
  },
  {
    id: 'pastel',
    name: 'Soft Pastel',
    colors: {
      primary: '#9bf6ff',
      primaryLight: '#f0fdff',
      primaryDark: '#caffbf',
      secondary: '#bdb2ff',
      secondaryLight: '#f7f5ff',
      secondaryDark: '#ffd6a5',
      accent: '#ffadad',
      accentLight: '#fff5f5',
      accentDark: '#fdffb6',
      background: '#fffffe',
      backgroundAlt: '#fdfcfe',
      border: '#f0f0f0',
    },
  },
];
