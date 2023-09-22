import { Button, ThemeButton } from './Button'
import { themeDecorator } from '../../../app/config/styleDecorator/styleDecorator'
import { Theme } from '../../../app/providers/ThemeProvider/ThemeContext'
import { type StoryObj } from '@storybook/react'

export default {
    component: Button,
    title: 'Button',
    tags: ['main']
}

export const MAIN_LIGHT = {
    decorators: [(Story: StoryObj) =>
        themeDecorator(Story, Theme.LIGHT)
    ],
    args: {
        theme: ThemeButton.MAIN,
        children: 'Hello'

    }
}

export const CLEAR_LIGHT = {
    decorators: [(Story: StoryObj) =>
        themeDecorator(Story, Theme.LIGHT)
    ],
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Hello'

    }
}
export const MAIN_DARK = {
    decorators: [(Story: StoryObj) =>
        themeDecorator(Story, Theme.DARK)
    ],
    args: {
        theme: ThemeButton.MAIN,
        children: 'Hello'

    }
}
export const CLEAR_DARK = {
    decorators: [(Story: StoryObj) =>
        themeDecorator(Story, Theme.DARK)
    ],
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Hello'

    }
}
