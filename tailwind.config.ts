import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { avocado:'#6DA544', avocadoDark:'#3D6022', coral:'#F47174', plane:'#F5B700', ink:'#1F2937' }, fontFamily: { display:['"Baloo 2"','system-ui','sans-serif'], body:['Inter','system-ui','sans-serif'] }, boxShadow:{ card:'0 8px 30px rgba(0,0,0,0.06)' }, borderRadius:{ xl2:'1rem' } } }, plugins:[require('@tailwindcss/typography')] }
export default config
