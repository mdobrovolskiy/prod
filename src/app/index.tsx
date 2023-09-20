import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.scss'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import './config/i18n/i18n'
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
