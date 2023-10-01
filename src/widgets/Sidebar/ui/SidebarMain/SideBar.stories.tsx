import SideBar from './SideBar'
import '../../../../app/styles/index.scss'
import { themeDecorator } from 'app/config/styleDecorator/styleDecorator'
import { Theme } from 'widgets/ToggleTheme'
import { type StoryObj } from '@storybook/react'

export default {
    component: SideBar,
    title: 'SideBar',
    tags: ['autodocs'],
}

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
}

export const Light = {
    decorators: [(Story: StoryObj) => themeDecorator(Story, Theme.LIGHT)],
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
}

export const Dark = {
    decorators: [(Story: StoryObj) => themeDecorator(Story, Theme.DARK)],
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
}
