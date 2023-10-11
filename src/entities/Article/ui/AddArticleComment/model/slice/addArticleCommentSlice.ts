import { createSlice } from '@reduxjs/toolkit'
import { type addArticleCommentSliceType } from '../types/addArticleCommentSliceType'
import { sendArticleComment } from 'entities/Article/ui/AddArticleComment/model/services/sendArticleComment'

const initialState: addArticleCommentSliceType = {
    isLoading: false,
    error: undefined,
    text: '',
}

const addArticleCommentSlice = createSlice({
    name: 'articleComments',
    initialState,
    reducers: {
        setText(state, action) {
            state.text = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(sendArticleComment.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(sendArticleComment.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
        })
        builder.addCase(sendArticleComment.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong'
        })
    },
})

export const { actions: addArticleCommentActions } = addArticleCommentSlice
export const { reducer: addArticleCommentReducer } = addArticleCommentSlice
