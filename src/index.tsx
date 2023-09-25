import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'app/styles/index.scss'
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider'
import 'app/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import { Loader } from 'widgets/Loader'
import { StoreProvider } from 'app/providers/StoreProvider'
render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>

                    <Suspense fallback={<Loader/>}>
                        <App />
                    </Suspense>

                </ThemeProvider>

            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
