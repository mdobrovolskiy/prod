import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'app/styles/index.scss'
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider'
import 'app/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
