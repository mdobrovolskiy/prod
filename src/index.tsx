import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'app/styles/index.scss'
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider'
import 'app/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import { Loader } from 'widgets/Loader'
render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <Suspense fallback={<Loader/>}>
                    <App />
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
