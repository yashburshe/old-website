/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      '2xs': { min: '300px' },
      xs: { max: '575px' },
      sm: { min: '576px', max: '897px' },
      md: { min: '898px', max: '1199px' },
      lg: { min: '1200px' },
      xl: { min: '1259px' },
      '2xl': { min: '1359px' }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
