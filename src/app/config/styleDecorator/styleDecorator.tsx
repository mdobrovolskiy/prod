import 'app/styles/index.scss'
import { type Theme } from '../../providers/ThemeProvider/ThemeContext'

export const themeDecorator = (Story: any, theme: Theme) => (
    <div className={`App ${theme}`} >

        <Story />
    </div>
)
