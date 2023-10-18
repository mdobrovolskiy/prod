import { rtkApi } from 'shared/api/rtkApi'

const getArticleById = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleById: build.query({
            query: (url) => ({
                url,
            }),
        }),
    }),
})

export const useArticleComments = getArticleById.useGetArticleByIdQuery
