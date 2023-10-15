import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    type ScrollPositions,
    type ScrollPositionItem,
} from 'features/SaveScrollPosition/model/types/saveScrollPositionSliceTypes'

const initialState: ScrollPositions = {}

const saveScrollPositionSlice = createSlice({
    name: 'saveScrollPosition',
    initialState,
    reducers: {
        setPagePosition(state, { payload }: PayloadAction<ScrollPositionItem>) {
            state[payload.page] = payload.position
        },
    },
})

export const { actions: saveScrollPositionActions } = saveScrollPositionSlice
export const { reducer: saveScrollPositionReducer } = saveScrollPositionSlice
