import {Noto_Sans, Playfair_Display,} from 'next/font/google'


const fontNoto = Noto_Sans({subsets:["latin"],preload:false})
const fontPlayfair = Playfair_Display({subsets:["latin"],preload:false})

export{fontNoto,fontPlayfair}