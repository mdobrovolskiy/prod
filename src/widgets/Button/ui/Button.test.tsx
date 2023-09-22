import { screen, render } from '@testing-library/react'
import { Button, ThemeButton } from './Button'
import { classNames } from 'shared/lib/classNames/classNames'

describe('Button tests', () => {
    test('render test', () => {
        render(<Button>hello</Button>)
        expect(screen.getByText('hello')).toBeInTheDocument()
    })
    test('class test', () => {
        const testClass = 'test-class'
        render(<Button className={classNames('first', {}, [ThemeButton.CLEAR])}>hello</Button>)
        expect(screen.getByText('hello')).toHaveClass('clear')
    })
})
