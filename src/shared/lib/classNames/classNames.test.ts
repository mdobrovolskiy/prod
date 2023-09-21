import { classNames } from './classNames'
describe('classNames', () => {
    it('only first argument', () => {
        expect(classNames('class')).toBe('class ')
    })
    it('with additional array', () => {
        const expected = '123 hello world '
        expect(classNames('123', {}, ['hello', 'world'])).toBe(expected)
    })
    it('with mods and additional', () => {
        const expected = '123 hello world hovered'
        expect(classNames('123', { hovered: true }, ['hello', 'world'])).toBe(expected)
    })
    it('with additional undefined', () => {
        const expected = '123 hovered'
        expect(classNames('123', { hovered: true }, [undefined])).toBe(expected)
    })
    it('with mods false', () => {
        const expected = '123 '
        expect(classNames('123', { hovered: false }, [undefined])).toBe(expected)
    })
})
