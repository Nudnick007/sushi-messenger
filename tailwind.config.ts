import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        //red to white 5 shades of colors
        rw1: '#f8f8f8',
        rw2:'#f8baba',
        rw3:'	#f87c7c',
        rw4:'#f83e3e',
        rw5:'#f80000',
        verylight: '#ffdddd',
      }
    },
    
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}
export default config
