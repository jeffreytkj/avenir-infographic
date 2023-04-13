import { useEffect } from 'react'
import { Quicksand } from '@next/font/google'
import '@/frontend/styles/global.scss'
import variables from '../frontend/styles/variable.module.scss'
import { NextSeo } from 'next-seo'

const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand'
})

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-quicksand: ${quicksand.style.fontFamily};
                }
            `}</style>

            <main className={`${quicksand.variable} ${quicksand.className}`}>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
