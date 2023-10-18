import { type authSchema } from '../../../../features/AuthByUsername/model/types/authSchema'
import { type UserSchema } from '../../../../entities/User/types/userTypes'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type ReducerManager } from '../config/reducerManager'
import { type ProfileSchema } from 'entities/Profile/model/types/profile'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'
import { type ArticleCommentsSlice } from 'pages/ArticleDetailsPage/model/types/articleComments'
import { type addArticleCommentSliceType } from 'entities/Article/ui/AddArticleComment/model/types/addArticleCommentSliceType'
import { type ArticleListSchema } from 'entities/Article/ui/ArticleList/model/types/articleListTypes'
import { type ScrollPositions } from 'features/SaveScrollPosition/model/types/saveScrollPositionSliceTypes'
import { type ArticleFiltersProps } from 'entities/Article/ui/ArticleFilters/model/types/articleFilters'
import { type articleRecommendationsTypes } from 'entities/Article/ui/ArticleRecommendations/model/types/articleRecommendationsTypes'
import { type rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
    authReducer?: authSchema
    userReducer: UserSchema
    profileReducer?: ProfileSchema
    articleDetailsReducer?: ArticleDetailsSchema
    articleCommentsReducer?: ArticleCommentsSlice
    addArticleCommentReducer?: addArticleCommentSliceType
    articleListReducer?: ArticleListSchema
    saveScrollPositionReducer?: ScrollPositions
    articleFiltersReducer?: ArticleFiltersProps
    articleRecommendationsReducer?: articleRecommendationsTypes
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
