import { AddFormComment } from 'features/AddFormComment/AddFormComment'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import {
    addArticleCommentActions,
    addArticleCommentReducer,
} from './model/slice/addArticleCommentSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { sendArticleComment } from 'entities/Article/ui/AddArticleComment/model/services/sendArticleComment'
import {
    getArticleCommentLoading,
    getArticleCommentText,
} from 'entities/Article/ui/AddArticleComment/model/selectors/articleCommentSelectors'
import { type ChangeEvent, type FormEvent } from 'react'

const reducers = {
    addArticleCommentReducer,
}

export const AddArticleComment = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleCommentLoading)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addArticleCommentActions.setText(e.target.value))
    }
    const value = useSelector(getArticleCommentText)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(sendArticleComment())
    }
    return (
        <ReducerLoader reducers={reducers}>
            <AddFormComment
                isLoading={isLoading}
                onChange={onChange}
                value={value}
                onSubmit={onSubmit}
            />
        </ReducerLoader>
    )
}
