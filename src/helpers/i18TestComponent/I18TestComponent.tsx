import { type FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../config/jest/i18n.forTests'
export const I18TestComponent: FC = ({ children }) => {
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    )
}
