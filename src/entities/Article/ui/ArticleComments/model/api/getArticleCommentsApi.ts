import { rtkApi } from 'shared/api/rtkApi'

export interface GetArticleCommentsQuery {
    url: string
    limit: number
    articleId: string | number
}

const getArticleComments = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleComments: build.query({
            query: ({ url, limit, articleId }: GetArticleCommentsQuery) => ({
                url,
                params: {
                    articleId,
                    _expand: 'user',
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleComments = getArticleComments.useGetArticleCommentsQuery
