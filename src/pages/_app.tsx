import React from 'react'
import { AppProps } from 'next/app'
import AppThemeState from '../states/appThemeState'

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
        <AppThemeState>
            <Component {...pageProps} key={router.route} />
        </AppThemeState>
    )
}

export default MyApp