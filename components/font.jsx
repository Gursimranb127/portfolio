import {Inter, Roboto_Mono,Oswald,Lusitana} from 'next/font/google';
export const inter= Inter({subsets: ['latin']})

export const lusitana= Lusitana({
    weight:['400','700'],
    subsets: ['latin']
})

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });