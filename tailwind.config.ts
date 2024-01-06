import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        '50': '#fef2f6',
        '100': '#fce7ed',
        '200': '#f9d3e0',
        '300': '#f4adc6',
        '400': '#ed7fa7',
        '500': '#e15289',
        '600': '#cd3175',
        '700': '#ac2463',
        '800': '#902158',
        '900': '#7c1f50',
        '950': '#450c29',
      },
      secondary: {
        '50': '#eff5ff',
        '100': '#d4e3fe',
        '200': '#bfd6fe',
        '300': '#93bdfd',
        '400': '#5f9afb',
        '500': '#3a75f7',
        '600': '#2455ec',
        '700': '#1c40d9',
        '800': '#1d36b0',
        '900': '#1e328a',
        '950': '#172154',
      },
      gray: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#919191',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
