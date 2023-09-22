import { screen, render, fireEvent } from '@testing-library/react'
import { SideBar } from './SideBar'
import { I18TestComponent } from 'helpers/i18TestComponent/i18TestComponent'

describe('Button tests', () => {
    test('render test', () => {
        render(<I18TestComponent>
            <SideBar/>
        </I18TestComponent>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('collapsed test', () => {
        render(<SideBar/>)

        const sideBar = screen.getByTestId('sidebar')

        const sideBarToggle = screen.getByTestId('sidebar-toggle')

        expect(sideBar).toBeInTheDocument()
        fireEvent.click(sideBarToggle)

        expect(sideBar).toHaveClass('collapsed')
    })
})
